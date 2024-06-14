import { parentPort, workerData } from 'worker_threads';
import CoinKey from 'coinkey';
import walletsArray from './wallets.js';
import fs from 'fs';

const walletsSet = new Set(walletsArray);

const { min, max } = workerData;

async function findBitcoins(min, max) {
    const keysFilePath = 'keys.txt';
    const lastKeyFilePath = 'lastKey.txt';

    let key = BigInt(min);
    const maxKey = BigInt(max);

    const startTime = Date.now();
    let totalKeysChecked = 0;

    while (key <= maxKey) {
        let pkey = key.toString(16).padStart(64, '0');
        let publicKey = generatePublic(pkey);

        key++;
        totalKeysChecked++;
        if (totalKeysChecked % 50000 === 0) {
            fs.writeFileSync(lastKeyFilePath, pkey); // Salva a última chave verificada
        }
        // Periodically update progress to the main thread
        if (totalKeysChecked % 10000 === 0) {

            const elapsedSeconds = (Date.now() - startTime) / 1000;
            const speed = totalKeysChecked / elapsedSeconds;
            const progress = {
                keysChecked: totalKeysChecked,
                speed: speed.toFixed(2)
            };
            parentPort.postMessage(progress);
        }

        if (walletsSet.has(publicKey)) {
            const elapsedSeconds = (Date.now() - startTime) / 1000;
            const result = {
                found: true,
                speed: (Number(key) - Number(BigInt(min))) / elapsedSeconds,
                time: elapsedSeconds,
                privateKey: pkey,
                WIF: generateWIF(pkey)
            };
            const lineToAppend = `Private key: ${pkey}, WIF: ${generateWIF(pkey)}\n`;
            try {
                fs.appendFileSync(keysFilePath, lineToAppend);
            } catch (err) {
                console.error('Error writing key to file:', err);
            }

            parentPort.postMessage(result);
            return;
        }
    }

    parentPort.postMessage({ status: 'Completed', finalKey: (key - 1n).toString(16).padStart(64, '0') });
}

function generatePublic(privateKey) {
    let _key = new CoinKey(Buffer.from(privateKey, 'hex'));
    _key.compressed = true;
    return _key.publicAddress;
}

function generateWIF(privateKey) {
    let _key = new CoinKey(Buffer.from(privateKey, 'hex'));
    return _key.privateWif;
}

findBitcoins(min, max);