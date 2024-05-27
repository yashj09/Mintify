import { useState } from "react";
import { ethers } from "ethers";
import { RiNftFill } from "react-icons/ri";
import narutoNFT from "../NarutoNFT.json";
const NarutoNftAddress = "0x4E9239f389734B1867dbe6521317b21a488F9b84";
const NarutoNFT = ({ account, setAccount }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(account[0]);

  const handleMint = async () => {
    if (window.ethereum) {
      const provider = await new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        NarutoNftAddress,
        narutoNFT.abi,
        signer
      );

      try {
        const response = await contract.mint(mintAmount, {
          value: ethers.parseEther((mintAmount * 0.05).toString()),
        });
        console.log("Mint response is", response);
      } catch (error) {
        console.error("Error is", error);
      }
    }
  };
  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };
  const handleIncrement = () => {
    if (mintAmount >= 5) return;
    setMintAmount(mintAmount + 1);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-44 gap-3">
        <div className="flex gap-4 text-xl px-7 p-2 bg-black text-black bg-opacity-20 rounded-xl shadow-xl">
          <button
            onClick={handleDecrement}
            className=" bg-white px-2 py-1 text-black bg-opacity-30 rounded-xl shadow-xl"
          >
            -
          </button>
          <button>{mintAmount}</button>
          <button
            className=" bg-white px-2 py-1 text-black bg-opacity-30 rounded-xl shadow-xl"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <div className="px-5 py-2 flex gap-1 text-xl flex-row bg-black text-black bg-opacity-20 rounded-xl shadow-xl text-center justify-center items-center">
          <RiNftFill />
          <button onClick={handleMint}>Mint</button>
        </div>
      </div>
    </>
  );
};
export default NarutoNFT;
