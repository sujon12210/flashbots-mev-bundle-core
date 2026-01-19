const { buildAndSendBundle } = require('./bundler');
const { logInfo } = require('./logger');

async function listenForBlocks(provider, flashbotsProvider, wallet) {
    logInfo('NETWORK', 'Waiting for new blocks...');

    provider.on('block', async (blockNumber) => {
        logInfo('BLOCK', `New Block Detected: #${blockNumber}`);
        
        // We target the NEXT block (Current + 1)
        const targetBlockNumber = blockNumber + 1;
        
        await buildAndSendBundle(
            provider, 
            flashbotsProvider, 
            wallet, 
            targetBlockNumber
        );
    });
}

module.exports = { listenForBlocks };
