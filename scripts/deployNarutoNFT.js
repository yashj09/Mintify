const hre = require("hardhat");

async function main() {
  const NarutoNFT = await hre.ethers.getContractFactory("NarutoNFT");
  const narutoNFT = await NarutoNFT.deploy(0xb677DB21Fd004fD058AA2E06cEee24b65F9c91F4);
  await narutoNFT.deployed();
  console.log("narutoNFT deployed to:", narutoNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });