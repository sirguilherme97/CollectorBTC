const wallets = [
  "1BgGZ9tcN4rm9KBzDn7KprQz87SZ26SAMH",
  "1CUNEBjYrCn2y1SdiUMohaKUi4wpP326Lb",
  "19ZewH8Kk1PDbSNdJ97FP4EiCjTRaZMZQA",
  "1EhqbyUMvvs7BfL8goY6qcPbD6YKfPqb7e",
  "1E6NuFjCi27W5zoXg8TRdcSRq84zJeBW3k",
  "1PitScNLyp2HCygzadCh7FveTnfmpPbfp8",
  "1McVt1vMtCC7yn5b9wgX1833yCcLXzueeC",
  "1M92tSqNmQLYw33fuBvjmeadirh1ysMBxK",
  "1CQFwcjw1dwhtkVWBttNLDtqL7ivBonGPV",
  "1LeBZP5QCwwgXRtmVUvTVrraqPUokyLHqe",
  "1PgQVLmst3Z314JrQn5TNiys8Hc38TcXJu",
  "1DBaumZxUkM4qMQRt2LVWyFJq5kDtSZQot",
  "1Pie8JkxBT6MGPz9Nvi3fsPkr2D8q3GBc1",
  "1ErZWg5cFCe4Vw5BzgfzB74VNLaXEiEkhk",
  "1QCbW9HWnwQWiQqVo5exhAnmfqKRrCRsvW",
  "1BDyrQ6WoF8VN3g9SAS1iKZcPzFfnDVieY",
  "1HduPEXZRdG26SUT5Yk83mLkPyjnZuJ7Bm",
  "1GnNTmTVLZiqQfLbAdp9DVdicEnB5GoERE",
  "1NWmZRpHH4XSPwsW6dsS3nrNWfL1yrJj4w",
  "1HsMJxNiV7TLxmoF6uJNkydxPFDog4NQum",
  "14oFNXucftsHiUMY8uctg6N487riuyXs4h",
  "1CfZWK1QTQE3eS9qn61dQjV89KDjZzfNcv",
  "1L2GM8eE7mJWLdo3HZS6su1832NX2txaac",
  "1rSnXMr63jdCuegJFuidJqWxUPV7AtUf7",
  "15JhYXn6Mx3oF4Y7PcTAv2wVVAuCFFQNiP",
  "1JVnST957hGztonaWK6FougdtjxzHzRMMg",
  "128z5d7nN7PkCuX5qoA4Ys6pmxUYnEy86k",
  "12jbtzBb54r97TCwW3G1gCFoumpckRAPdY",
  "19EEC52krRUK1RkUAEZmQdjTyHT7Gp1TYT",
  "1LHtnpd8nU5VHEMkG2TMYYNUjjLc992bps",
  "1LhE6sCTuGae42Axu1L1ZB7L96yi9irEBE",
  "1FRoHA9xewq7DjrZ1psWJVeTer8gHRqEvR",
  "187swFMjz1G54ycVU56B7jZFHFTNVQFDiu",
  "1PWABE7oUahG2AFFQhhvViQovnCr4rEv7Q",
  "1PWCx5fovoEaoBowAvF5k91m2Xat9bMgwb",
  "1Be2UF9NLfyLFbtm3TCbmuocc9N1Kduci1",
  "14iXhn8bGajVWegZHJ18vJLHhntcpL4dex",
  "1HBtApAFA9B2YZw3G2YKSMCtb3dVnjuNe2",
  "122AJhKLEfkFBaGAd84pLp1kfE7xK3GdT8",
  "1EeAxcprB2PpCnr34VfZdFrkUWuxyiNEFv",
  "1L5sU9qvJeuwQUdt4y1eiLmquFxKjtHr3E",
  "1E32GPWgDyeyQac4aJxm9HVoLrrEYPnM4N",
  "1PiFuqGpG8yGM5v6rNHWS3TjsG6awgEGA1",
  "1CkR2uS7LmFwc3T2jV8C1BhWb5mQaoxedF",
  "1NtiLNGegHWE3Mp9g2JPkgx6wUg4TW7bbk",
  "1F3JRMWudBaj48EhwcHDdpeuy2jwACNxjP",
  "1Pd8VvT49sHKsmqrQiP61RsVwmXCZ6ay7Z",
  "1DFYhaB2J9q1LLZJWKTnscPWos9VBqDHzv",
  "12CiUhYVTTH33w3SPUBqcpMoqnApAV4WCF",
  "1MEzite4ReNuWaL5Ds17ePKt2dCxWEofwk",
  "1NpnQyZ7x24ud82b7WiRNvPm6N8bqGQnaS",
  "15z9c9sVpu6fwNiK7dMAFgMYSK4GqsGZim",
  "15K1YKJMiJ4fpesTVUcByoz334rHmknxmT",
  "1KYUv7nSvXx4642TKeuC2SNdTk326uUpFy",
  "1LzhS3k3e9Ub8i2W1V8xQFdB8n2MYCHPCa",
  "17aPYR1m6pVAacXg1PTDDU7XafvK1dxvhi",
  "15c9mPGLku1HuW9LRtBf4jcHVpBUt8txKz",
  "1Dn8NF8qDyyfHMktmuoQLGyjWmZXgvosXf",
  "1HAX2n9Uruu9YDt4cqRgYcvtGvZj1rbUyt",
  "1Kn5h2qpgw9mWE5jKpk8PP4qvvJ1QVy8su",
  "1AVJKwzs9AskraJLGHAZPiaZcrpDr1U6AB",
  "1Me6EfpwZK5kQziBwBfvLiHjaPGxCKLoJi",
  "1NpYjtLira16LfGbGwZJ5JbDPh3ai9bjf4",
  "16jY7qLJnxb7CHZyqBP8qca9d51gAjyXQN",
  "18ZMbwUFLMHoZBbfpCjUJQTCMCbktshgpe",
  "13zb1hQbWVsc2S7ZTZnP2G4undNNpdh5so",
  "1BY8GQbnueYofwSuFAT3USAhGjPrkxDdW9",
  "1MVDYgVaSN6iKKEsbzRUAYFrYJadLYZvvZ",
  "19vkiEajfhuZ8bs8Zu2jgmC6oqZbWqhxhG",
  "19YZECXj3SxEZMoUeJ1yiPsw8xANe7M7QR",
  "1PWo3JeB9jrGwfHDNpdGK54CRas7fsVzXU",
  "1JTK7s9YVYywfm5XUH7RNhHJH1LshCaRFR",
  "12VVRNPi4SJqUTsp6FmqDqY5sGosDtysn4",
  "1FWGcVDK3JGzCC3WtkYetULPszMaK2Jksv",
  "1J36UjUByGroXcCvmj13U6uwaVv9caEeAt",
  "1DJh2eHFYQfACPmrvpyWc8MSTYKh7w9eRF",
  "1Bxk4CQdqL9p22JEtDfdXMsng1XacifUtE",
  "15qF6X51huDjqTmF9BJgxXdt1xcj46Jmhb",
  "1ARk8HWJMn8js8tQmGUJeQHjSE7KRkn2t8",
  "1BCf6rHUW6m3iH2ptsvnjgLruAiPQQepLe",
  "15qsCm78whspNQFydGJQk5rexzxTQopnHZ",
  "13zYrYhhJxp6Ui1VV7pqa5WDhNWM45ARAC",
  "14MdEb4eFcT3MVG5sPFG4jGLuHJSnt1Dk2",
  "1CMq3SvFcVEcpLMuuH8PUcNiqsK1oicG2D",
  "1Kh22PvXERd2xpTQk3ur6pPEqFeckCJfAr",
  "1K3x5L6G57Y494fDqBfrojD28UJv4s5JcK",
  "1PxH3K1Shdjb7gSEoTX7UPDZ6SH4qGPrvq",
  "16AbnZjZZipwHMkYKBSfswGWKDmXHjEpSf",
  "19QciEHbGVNY4hrhfKXmcBBCrJSBZ6TaVt",
  "1L12FHH2FHjvTviyanuiFVfmzCy46RRATU",
  "1EzVHtmbN4fs4MiNk3ppEnKKhsmXYJ4s74",
  "1AE8NzzgKE7Yhz7BWtAcAAxiFMbPo82NB5",
  "17Q7tuG2JwFFU9rXVj3uZqRtioH3mx2Jad",
  "1K6xGMUbs6ZTXBnhw1pippqwK6wjBWtNpL",
  "19eVSDuizydXxhohGh8Ki9WY9KsHdSwoQC",
  "15ANYzzCp5BFHcCnVFzXqyibpzgPLWaD8b",
  "18ywPwj39nGjqBrQJSzZVq2izR12MDpDr8",
  "1CaBVPrwUxbQYYswu32w7Mj4HR4maNoJSX",
  "1JWnE6p6UN7ZJBN7TtcbNDoRcjFtuDWoNL",
  "1KCgMv8fo2TPBpddVi9jqmMmcne9uSNJ5F",
  "1CKCVdbDJasYmhswB6HKZHEAnNaDpK7W4n",
  "1PXv28YxmYMaB8zxrKeZBW8dt2HK7RkRPX",
  "1AcAmB6jmtU6AiEcXkmiNE9TNVPsj9DULf",
  "1EQJvpsmhazYCcKX5Au6AZmZKRnzarMVZu",
  "1CMjscKB3QW7SDyQ4c3C3DEUHiHRhiZVib",
  "18KsfuHuzQaBTNLASyj15hy4LuqPUo1FNB",
  "15EJFC5ZTs9nhsdvSUeBXjLAuYq3SWaxTc",
  "1HB1iKUqeffnVsvQsbpC6dNi1XKbyNuqao",
  "1GvgAXVCbA8FBjXfWiAms4ytFeJcKsoyhL",
  "12JzYkkN76xkwvcPT6AWKZtGX6w2LAgsJg",
  "1824ZJQ7nKJ9QFTRBqn7z7dHV5EGpzUpH3",
  "18A7NA9FTsnJxWgkoFfPAFbQzuQxpRtCos",
  "1NeGn21dUDDeqFQ63xb2SpgUuXuBLA4WT4",
  "174SNxfqpdMGYy5YQcfLbSTK3MRNZEePoy",
  "1NLbHuJebVwUZ1XqDjsAyfTRUPwDQbemfv",
  "1MnJ6hdhvK37VLmqcdEwqC3iFxyWH2PHUV",
  "1KNRfGWw7Q9Rmwsc6NT5zsdvEb9M2Wkj5Z",
  "1PJZPzvGX19a7twf5HyD2VvNiPdHLzm9F6",
  "1GuBBhf61rnvRe4K8zu8vdQB3kHzwFqSy7",
  "17s2b9ksz5y7abUm92cHwG8jEPCzK3dLnT",
  "1GDSuiThEV64c166LUFC9uDcVdGjqkxKyh",
  "1Me3ASYt5JCTAK2XaC32RMeH34PdprrfDx",
  "1CdufMQL892A69KXgv6UNBD17ywWqYpKut",
  "1BkkGsX9ZM6iwL3zbqs7HWBV7SvosR6m8N",
  "1PXAyUB8ZoH3WD8n5zoAthYjN15yN5CVq5",
  "1AWCLZAjKbV1P7AHvaPNCKiB7ZWVDMxFiz",
  "1G6EFyBRU86sThN3SSt3GrHu1sA7w7nzi4",
  "1MZ2L1gFrCtkkn6DnTT2e4PFUTHw9gNwaj",
  "1Hz3uv3nNZzBVMXLGadCucgjiCs5W9vaGz",
  "1Fo65aKq8s8iquMt6weF1rku1moWVEd5Ua",
  "16zRPnT8znwq42q7XeMkZUhb1bKqgRogyy",
  "1KrU4dHE5WrW8rhWDsTRjR21r8t3dsrS3R",
  "17uDfp5r4n441xkgLFmhNoSW1KWp6xVLD",
  "13A3JrvXmvg5w9XGvyyR4JEJqiLz8ZySY3",
  "16RGFo6hjq9ym6Pj7N5H7L1NR1rVPJyw2v",
  "1UDHPdovvR985NrWSkdWQDEQ1xuRiTALq",
  "15nf31J46iLuK1ZkTnqHo7WgN5cARFK3RA",
  "1Ab4vzG6wEQBDNQM1B2bvUz4fqXXdFk2WT",
  "1Fz63c775VV9fNyj25d9Xfw3YHE6sKCxbt",
  "1QKBaU6WAeycb3DbKbLBkX7vJiaS8r42Xo",
  "1CD91Vm97mLQvXhrnoMChhJx4TP9MaQkJo",
  "15MnK2jXPqTMURX4xC3h4mAZxyCcaWWEDD",
  "13N66gCzWWHEZBxhVxG18P8wyjEWF9Yoi1",
  "1NevxKDYuDcCh1ZMMi6ftmWwGrZKC6j7Ux",
  "19GpszRNUej5yYqxXoLnbZWKew3KdVLkXg",
  "1M7ipcdYHey2Y5RZM34MBbpugghmjaV89P",
  "18aNhurEAJsw6BAgtANpexk5ob1aGTwSeL",
  "1FwZXt6EpRT7Fkndzv6K4b4DFoT4trbMrV",
  "1CXvTzR6qv8wJ7eprzUKeWxyGcHwDYP1i2",
  "1MUJSJYtGPVGkBCTqGspnxyHahpt5Te8jy",
  "13Q84TNNvgcL3HJiqQPvyBb9m4hxjS3jkV",
  "1LuUHyrQr8PKSvbcY1v1PiuGuqFjWpDumN",
  "18192XpzzdDi2K11QVHR7td2HcPS6Qs5vg",
  "1NgVmsCCJaKLzGyKLFJfVequnFW9ZvnMLN",
  "1AoeP37TmHdFh8uN72fu9AqgtLrUwcv2wJ",
  "1FTpAbQa4h8trvhQXjXnmNhqdiGBd1oraE",
  "14JHoRAdmJg3XR4RjMDh6Wed6ft6hzbQe9",
  "19z6waranEf8CcP8FqNgdwUe1QRxvUNKBG",
  "14u4nA5sugaswb6SZgn5av2vuChdMnD9E5",
  "1NBC8uXJy1GiJ6drkiZa1WuKn51ps7EPTv",
  "18bHfcm8kGoAhBaQXzzVcG5534mdpWK981"
];


export default wallets