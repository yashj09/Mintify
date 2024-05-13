import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import NarutoNFT from './components/NFT'
const App = () => {
  const [account, setAccount] = useState([])

  return (
    <>
      <Navbar account={account} setAccount={setAccount} />
      <NarutoNFT account={account} setAccount={setAccount} />
    </>
  )
}

export default App
