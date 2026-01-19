# Flashbots MEV Bundle Core 🤖

![Flashbots](https://img.shields.io/badge/Flashbots-Protect-black) ![Ethers.js](https://img.shields.io/badge/Ethers.js-v5.7-blue) ![MEV](https://img.shields.io/badge/Strategy-Arbitrage-green)

## System Overview

This repository contains a **Flashbots Searcher** implementation designed for the Ethereum Mainnet. Unlike standard bots that broadcast transactions to the public P2P network, this engine submits **atomic bundles** directly to block builders.

### Why Flashbots?
* **Privacy:** Transactions are not visible in the mempool until mined.
* **Zero-Cost Fails:** If the bundle doesn't execute (e.g., profit condition not met), the transaction is never included, costing **0 Gas**.
* **Priority:** Direct access to validator block space.

## Architecture

1.  **Block Listener**: Listens for every new block header.
2.  **Simulation Engine**: Simulates the bundle against the *next* block state.
3.  **Relayer**: Signs and dispatches the bundle to `relay.flashbots.net`.

## Configuration

The bot requires a specific `FLASHBOTS_AUTH_KEY` (a random wallet) to sign payloads for reputation tracking, separate from the `EXECUTOR_KEY` (funds holder).

## Deployment

1.  **Install**: `npm install`
2.  **Config**: Update `.env` with your Keys and RPC.
3.  **Run**: `node index.js`

## Disclaimer
MEV is a highly competitive zero-sum game. This codebase provides the infrastructure; the profitability depends on the `arbitrage_logic.js` strategy you implement.

---
*Powered by open-source MEV research.*
