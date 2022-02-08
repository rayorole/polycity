// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Polycity is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Polycity", "POLYC") {}

    function mint() public returns (uint256) {
        _tokenIds.increment();
        uint256 _newId = _tokenIds.current();

        _safeMint(msg.sender, _newId);
        return _newId;
    }

    function totalSupply() public view returns (uint256) {
        return _tokenIds.current();
    }
}
