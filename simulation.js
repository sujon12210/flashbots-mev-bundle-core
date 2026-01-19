const { logInfo, logError } = require('./logger');

async function simulateBundle(flashbotsProvider, bundle, targetBlock) {
    logInfo('SIM', `Simulating bundle for block ${targetBlock}...`);

    try {
        // Signs the bundle but doesn't send it to miners yet
        const signedBundle = await flashbotsProvider.signBundle(bundle);
        
        const simulation = await flashbotsProvider.simulate(signedBundle, targetBlock);

        if ('error' in simulation) {
            logError('SIM', `Simulation Failed: ${simulation.error.message}`);
            return false;
        } else {
            logInfo('SIM', `Simulation Success! Gas Used: ${simulation.results[0].gasUsed}`);
            return true;
        }

    } catch (e) {
        logError('SIM', `System Error: ${e.message}`);
        return false;
    }
}

module.exports = { simulateBundle };
