## Bitcoin Puzzle Key Search Application
# Overview
This Node.js application searches for Bitcoin private keys within specified ranges using parallel processing with Node.js worker threads. It provides real-time progress monitoring and logs results to files.

# Installation
Install Node.js:

Make sure Node.js is installed on your system. You can download it from nodejs.org and follow the installation instructions.
Clone and Setup:

bash
Copiar código
$ git clone <repository_url>
$ cd bitcoin-private-key-search
$ npm install
# Usage
Run the application with:

bash
Copiar código
$ node main.js
Instructions
Select Complexity Level:

Choose a complexity level (1 to 160) to define the search range.
Monitor Progress:

View real-time updates on key search speed and progress.
Every 10,000 keys searched, a summary displays the current speed and progress.
Interrupt and Resume:

Press Ctrl + C to interrupt the search. Resume by restarting the application and selecting the option to continue from the last checkpoint.
View Results:

Found Bitcoin private keys and their Wallet Import Format (WIF) are logged to keys.txt.
The last attempted key is logged to Last_key.txt.
Features
Parallel Processing: Utilizes Node.js worker threads for concurrent key searching.
Real-time Monitoring: Provides live updates on key search status.
Logging: Logs results and progress for analysis and reference.
Contributing
Contributions are welcome! Please report bugs, suggest improvements, or contribute new features via GitHub issues or pull requests.

License
This project is licensed under the MIT License.