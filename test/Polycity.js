// const { expect } = require("chai");
// const { ethers } = require("ethers");

// describe("Polycity contract", () => {
//   let Token, token, owner, addr1, addr2;

//   beforeEach(async () => {
//     Token = await ethers.getContractfactory("Polycity");
//     token = await Token.deploy();
//     [owner, addr1, addr2, _] = await ethers.getSigners();
//   });

//   describe("Deployment", () => {
//     it("Should set the right owner", async () => {
//       expect(await token.owner()).to.equal(owner.address);
//     });
//   });
// });