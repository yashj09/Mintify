// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NarutoNFT is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalPrice;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMint;

    constructor(
        address initialOwner
    ) payable ERC721("NarutoUzumaki", "NU") Ownable(initialOwner) {
        mintPrice = 0.05 ether;
        totalPrice = 0 ether;
        maxSupply = 10000;
        maxPerWallet = 5;
    }

    function setIsPublicMintEnabled(
        bool isPublicMintEnabled_
    ) external onlyOwner {
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner {
        baseTokenUri = baseTokenUri_;
    }

    function tokenURI(
        uint256 tokenId_
    ) public view override returns (string memory) {
        require(ownerOf(tokenId_) != address(0), "Token does not exist!");
        return
            string(
                abi.encodePacked(
                    baseTokenUri,
                    Strings.toString(tokenId_),
                    ".json"
                )
            );
    }
}
