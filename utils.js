const { ethers } = require('ethers');

// Calculates how much ETH to pay the miner (Bribe)
// Usually 80-90% of the profit goes to the miner in competitive bundles
function calculateBribe(profitWei, percentage) {
    return profitWei.mul(percentage).div(100);
}

module.exports = { calculateBribe };
