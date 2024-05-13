require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-etherscan");
const dotenv = require('dotenv');
dotenv.config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  }
};
