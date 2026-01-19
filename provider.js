const { ethers } = require('ethers');
const { FlashbotsBundleProvider } = require('@flashbots/ethers-provider-bundle');
require('dotenv').config();

async function setupProvider() {
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    
    // The wallet that holds funds
    const wallet = new ethers.Wallet(process.env.EXECUTOR_PRIVATE_KEY, provider);
    
    // The wallet used for reputation signing
    const authSigner = new ethers.Wallet(process.env.AUTH_PRIVATE_KEY);

    const flashbotsProvider = await FlashbotsBundleProvider.create(
        provider,
        authSigner
    );

    return { provider, flashbotsProvider, wallet };
}

module.exports = { setupProvider };
