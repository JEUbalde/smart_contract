const ethers = require("ethers");

const main = async () => {
  const provider = new ethers.providers.JsonRpcProvider();
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to: ", transactions.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

runMain();