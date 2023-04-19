require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/NgZ0C4_UIeU7_4ru0yNZVDVJI4MZP6YP",
      accounts: ["fb5e80b0c564dac790dc4fac9ac443bfd2300480558cd69d8e41f6d13668824a"]
    }
  }
}