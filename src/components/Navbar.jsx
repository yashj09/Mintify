import React from 'react'

const Navbar = ({ account, setAccount }) => {
  const isConnected = Boolean(account[0])

  const connectAccount = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask first.")
      return
    }
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts', })
      setAccount(accounts)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <div>Linkedin</div>
      <div>Twitter</div>
      <div>Github</div>

      <div>About </div>
      <div>Mint </div>
      <div>
        {isConnected ? (<div>Account: {account[0].slice(0, 6)}......{account[0].slice(38,)}</div>) : (<button onClick={connectAccount}>Connect Account</button>)}
      </div>
    </>
  )
}

export default Navbar