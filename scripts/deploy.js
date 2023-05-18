require("dotenv").config();
const hre = require("hardhat");

const WINNER_CONTRACT = process.env.WINNER_CONTRACT_ADDRESS_GOERLI;

async function main() {

  const CallWinner = await hre.ethers.getContractFactory("CallWinner");
  const callwinnerContractInstance = await CallWinner.deploy(WINNER_CONTRACT);

  await callWinnerContractInstance.deployed();

  console.log(`Call Winner contract deployed at: ${callWinnerContractInstance.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });