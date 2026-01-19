const { generateArbitrageTx } = require('./strategy');
const { simulateBundle } = require('./simulation');
const { logSuccess, logError } = require('./logger');

async function buildAndSendBundle(provider, flashbotsProvider, wallet, targetBlock) {
    
    // 1. Generate the Transaction (Logic from strategy.js)
    const tx = await generateArbitrageTx(wallet);
    if (!tx) return; // No opportunity found

    const bundle = [
        {
            transaction: tx,
            signer: wallet
        }
    ];

    // 2. Simulate before sending (Crucial for Flashbots)
    const simulation = await simulateBundle(flashbotsProvider, bundle, targetBlock);
    
    if (simulation) {
        // 3. Send Bundle
        const response = await flashbotsProvider.sendBundle(bundle, targetBlock);
        
        if ('error' in response) {
            logError('BUNDLE', `Relay Error: ${response.error.message}`);
        } else {
            logSuccess('BUNDLE', `Bundle submitted for Block #${targetBlock}`);
        }
    }
}

module.exports = { buildAndSendBundle };
