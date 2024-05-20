import { useState } from 'react'
import Navbar from './components/Navbar'
import NarutoNFT from './components/NarutoNFT'
const App = () => {
  const [account, setAccount] = useState([])

  return (
    <>
      <div className="bg-[url('./assets/Background.jpg')] justify-center w-full  bg-no-repeat bg-cover bg-center rounded-lg h-[100vh] text-lg font-medium">
        <Navbar account={account} setAccount={setAccount} />
        <NarutoNFT account={account} setAccount={setAccount} />
      </div>
    </>
  )
}

export default App
