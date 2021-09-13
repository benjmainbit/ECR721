require('@openzeppelin/hardhat-upgrades');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const ALCHEMY_API_KEY = "nZMrW0mwEy9cZ4cUXWKZ8Z_njGKuUaxJ";

const RINKEBY_PRIVATE_KEY = "332641798a8297bc15eaa4649ff1d3589910594b71f402bb47bcdf1304225060";

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
    },
  },
};