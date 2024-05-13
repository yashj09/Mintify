import hre from "hardhat";

async function main() {
  const NarutoNFT = await hre.ethers.getContractFactory("NarutoNFT");
  const narutoNFT = await NarutoNFT.deploy("0xB3564290F1F1e128f2c342c25C662adb26Ff526F");
  await narutoNFT.waitForDeployment();
  console.log("narutoNFT deployed to:", await narutoNFT.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });