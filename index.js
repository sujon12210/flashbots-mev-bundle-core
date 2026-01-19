require('dotenv').config();
const { setupProvider } = require('./provider');
const { listenForBlocks } = require('./block_listener');
const { logInfo } = require('./logger');

async function main() {
    console.clear();
    logInfo('SYSTEM', 'Initializing Flashbots Searcher...');

    try {
        // Initialize Connections
        const { provider, flashbotsProvider, wallet } = await setupProvider();
        
        logInfo('AUTH', `Executor: ${wallet.address}`);
        logInfo('AUTH', `Flashbots Relay Connected`);

        // Start Logic
        await listenForBlocks(provider, flashbotsProvider, wallet);

    } catch (error) {
        console.error("Critical Start Error:", error);
    }
}

main();
