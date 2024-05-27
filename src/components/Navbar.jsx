import React from "react";
import { FiYoutube } from "react-icons/fi";
const Navbar = ({ account, setAccount }) => {
  const isConnected = Boolean(account[0]);

  const connectAccount = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask first.");
      return;
    }
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-row justify-between ">
      <div className="flex gap-10 m-10">
        <div>
          <a href="https://www.linkedin.com/in/yash-jain-5a92861ab">Linkedin</a>
        </div>
        <div>
          <a href="https://x.com/0xYash_Jain">Twitter</a>
        </div>
        <div>
          <a href="https://github.com/yashj09">Github</a>
        </div>
      </div>
      <div className="flex gap-10 m-10">
        <div className="flex gap-1 justify-center items-center ">
          <FiYoutube />
          Minting Guide
        </div>
        <div>
          {isConnected ? (
            <div>
              Account: {account[0].slice(0, 6)}......{account[0].slice(38)}
            </div>
          ) : (
            <button onClick={connectAccount}>Connect Account</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
