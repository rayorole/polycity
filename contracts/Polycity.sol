// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Polycity is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 public constant landPrice = 80000000000000000; // Or 0.08 Ether
    uint256 public constant maxLand = 6;
    uint256 public constant LAND = 12000;
    bool public saleIsActive = true;

    address public owner;

    constructor() ERC721("Polycity", "POLYC") {
        owner = msg.sender;
        reserveLand();
    }

    function mint(uint256 landAmount) public {
        require(saleIsActive, "Sale must be active");
        require(landAmount <= maxLand, "Can only mint 6 at a time");
        require(
            totalSupply() + landAmount <= LAND,
            "Purchase exceeds max supply"
        );

        for (uint256 i = 0; i < landAmount; i++) {
            uint256 mintIndex = totalSupply();
            if (totalSupply() < LAND) {
                _safeMint(msg.sender, mintIndex);
            }
        }
    }

    function reserveLand() public {
        require(msg.sender == owner, "Only owner");

        uint256 supply = totalSupply();
        uint256 i;
        for (i = 0; i < 30; i++) {
            _safeMint(msg.sender, supply + i);
        }
    }

    function totalSupply() public view returns (uint256) {
        return _tokenIds.current();
    }
}
