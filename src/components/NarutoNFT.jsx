import { useState } from 'react'
import { ethers } from 'ethers'
import narutoNFT from '../NarutoNFT.json'
const NarutoNftAddress = "0xc06CE63b126423297555E6Dbd709F386F167D87b"
const NarutoNFT = ({ account, setAccount }) => {
  const [mintAmount, setMintAmount] = useState(1)
  const isConnected = Boolean(account[0])

  const handleMint = async () => {
    if (window.ethereum) {
      const provider = await new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(NarutoNftAddress, narutoNFT.abi, signer)

      try {
        const response = await contract.mint(mintAmount, { value: ethers.utils.parseEther((mintAmount * 0.05).toString()), })
        console.log("Mint response is", response)
      }
      catch (error) {
        console.error("Error is", error)
      }
    }
  }
  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1)
  }
  const handleIncrement = () => {
    if (mintAmount >= 5) return;
    setMintAmount(mintAmount + 1)
  }
  return (
    <>
      <div>
        <div>
          <button onClick={handleDecrement}>-</button>
          <span>{mintAmount}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button onClick={handleMint}>Mint</button>
      </div>
    </>
  )
}
export default NarutoNFT
