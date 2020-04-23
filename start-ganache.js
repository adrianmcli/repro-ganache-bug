require("dotenv").config();

const { ethers } = require("ethers");
const ganache = require("ganache-core");

const PORT = 8545;

// fork off mainnet with a specific account preloaded with 1000 ETH
const server = ganache.server({
  port: PORT,
  fork: process.env.MAINNET_NODE_URL,
  network_id: 1,
  accounts: [
    {
      secretKey: process.env.PRIV_KEY,
      balance: ethers.utils.hexlify(ethers.utils.parseEther("1000")),
    },
  ],
});

server.listen(PORT, (err, chain) => {
  console.log(`Test chain started on port ${PORT}, listening...`);
});
