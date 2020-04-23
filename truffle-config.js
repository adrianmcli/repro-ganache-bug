require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

console.log(process.env.PRIV_KEY);

// let truffle know what chain to migrate your contracts to
module.exports = {
  networks: {
    ganache: {
      // skipDryRun: true,
      network_id: "*",
      provider: new HDWalletProvider(
        process.env.PRIV_KEY,
        "http://127.0.0.1:8545/",
      ),
    },
  },
};
