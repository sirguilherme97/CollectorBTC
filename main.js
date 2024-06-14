import { Worker } from 'worker_threads';
import ranges from './ranges.js';
import readline from 'readline';
import chalk from 'chalk';
import fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let shouldStop = false;
const workers = [];

console.clear();
console.log("\x1b[33m"+"####  ##### ####  #####  ###  ##### #   # #   # ")
console.log("#   # #   #  #     #  # #   # #   # #  ## #   # ")
console.log("####  #      ####  #  # #   # #     # # #  #### ")
console.log("#     #      #  #  #  # #   # #     ##  #     # ")
console.log("#     #     ##### #   #  ###  #     #   #     # ")

console.log("\x1b[35m"+"\nRGB Logic Collector BTC\t\t\t v1.0.0" + "\x1b[0m");
console.log("\x1b[35m"+"==============================================="+"\x1b[0m")

rl.question(`\nComplexity Level [${chalk.cyan(1)} - ${chalk.cyan(160)}]: `, (answer) => {
    if (parseInt(answer) < 1 || parseInt(answer) > 160) {
        console.log(chalk.red('Error: You need to choose a number between 1 and 160'));
        rl.close();
        return;
    }

    const min = BigInt(ranges[answer - 1].min);
    const max = BigInt(ranges[answer - 1].max);

    console.log('from ', chalk.yellow(min),' to ', chalk.yellow(max),'\nPossibilities:  ', chalk.yellow((max - min).toLocaleString('en-US')));

    rl.question(`\n[${chalk.cyan(1)}] Start  [${chalk.cyan(2)}] Percentage  [${chalk.cyan(3)}] Continue\n\nChoose an option: `, (answer2) => {
        if (answer2 == '2') {
            rl.question('\nChoose a number between 0 and 1: ', (answer3) => {
                const percent = parseFloat(answer3);
                if (percent < 0 || percent > 1 || isNaN(percent)) {
                    console.log(chalk.bgRed('\nError: You need to choose a number between 0 and 1'));
                    rl.close();
                    return;
                }
                const adjustedMin = min + BigInt((max - min) * BigInt(Math.floor(percent * 1e18)) / BigInt(1e18));
                startMining(adjustedMin, max);
            });
        } else if (answer2 == '3') {
            rl.question('\nContinue from last checkpoint (0xCODE): ', (answer3) => {
                const adjustedMin = BigInt(answer3);
                startMining(adjustedMin, max);
            });
        } else {
            startMining(min, max);
        }
    });
});

function startMining(min, max) {
    rl.question(`\nNumber of Threads: `, (numThreads) => {
        const numberOfThreads = parseInt(numThreads);
        if (isNaN(numberOfThreads) || numberOfThreads <= 0) {
            console.log(chalk.bgRed('Error: You need to choose a valid number of threads'));
            rl.close();
            return;
        }

        const rangeSize = max - min;
        const subRangeSize = rangeSize / BigInt(numberOfThreads);

        for (let i = 0; i < numberOfThreads; i++) {
            const workerMin = min + subRangeSize * BigInt(i);
            const workerMax = i === numberOfThreads - 1 ? max : workerMin + subRangeSize - 1n;

            const worker = new Worker('./worker.js', {
                workerData: {
                    min: workerMin.toString(),
                    max: workerMax.toString()
                }
            });

            worker.on('message', (msg) => {
                if (msg.keysChecked !== undefined) {
                    // Update HUD with keys checked information
                    updateHUD(msg);
                } else if (msg.found) {
                    // Handle found message
                    console.log('\nSystem:', msg);
                    workers.forEach(w => w.terminate());
                    rl.close();
                } else if (msg.status === 'Completed') {
                    // Handle completion status
                    console.log(`Worker completed checking keys up to ${msg.finalKey}`);
                }
            });

            worker.on('error', (err) => {
                console.error('\nSystem:', err);
            });

            workers.push(worker);
        }

        rl.close();
    });
}

function updateHUD(msg) {
    // Clear previous HUD and print updated information
    console.clear();
    console.log("\x1b[33m"+"####  ##### ####  #####  ###  ##### #   # #   # ")
    console.log("#   # #   #  #     #  # #   # #   # #  ## #   # ")
    console.log("####  #      ####  #  # #   # #     # # #  #### ")
    console.log("#     #      #  #  #  # #   # #     ##  #     # ")
    console.log("#     #     ##### #   #  ###  #     #   #     # ")
    console.log("\x1b[35m"+"\nRGB Logic Collector BTC\t\t\t v1.0.0" + "\x1b[0m");
    console.log("\x1b[35m"+"==============================================="+"\x1b[0m");
    console.log(`\nKeys Checked: ${msg.keysChecked.toLocaleString('en-US')} [${msg.speed}/s]`);
}

rl.on('SIGINT', () => {
    shouldStop = true;
    workers.forEach(worker => worker.terminate());
    rl.close();
    process.exit();
});

process.on('SIGINT', () => {
    shouldStop = true;
    workers.forEach(worker => worker.terminate());
    rl.close();
    process.exit();
});
