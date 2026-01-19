const chalk = require('chalk');

function logInfo(tag, msg) {
    console.log(`${chalk.blue(`[${tag}]`)} ${msg}`);
}

function logSuccess(tag, msg) {
    console.log(`${chalk.green.bold(`[${tag}]`)} ${msg}`);
}

function logError(tag, msg) {
    console.log(`${chalk.red(`[${tag}]`)} ${msg}`);
}

module.exports = { logInfo, logSuccess, logError };
