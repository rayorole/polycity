const { expect } = require("chai");
const { ethers } = require("ethers");

describe("Polycity contract", () => {
  it("Should return the correct name", async function () {
    const Polycity = await hre.ethers.getContractFactory("Polycity");
    const PolycityDeployed = await Polycity.deploy();

    await PolycityDeployed.deployed();
    expect(await PolycityDeployed.name()).to.equal("Polycity");
  });

  it("Should return the correct symbol", async function () {
    const Polycity = await hre.ethers.getContractFactory("Polycity");
    const PolycityDeployed = await Polycity.deploy();

    await PolycityDeployed.deployed();
    expect(await PolycityDeployed.symbol()).to.equal("POLYC");
  });

  it("Should mint correctly", async function () {
    const Polycity = await hre.ethers.getContractFactory("Polycity");
    const PolycityDeployed = await Polycity.deploy();

    await PolycityDeployed.deployed();
    await PolycityDeployed.mint();

    expect(await PolycityDeployed.totalSupply()).to.equal(1);

    await PolycityDeployed.transferFrom(
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      "0xaBA7161A7fb69c88e16ED9f455CE62B791EE4D03",
      1
    );

    expect(await PolycityDeployed.ownerOf(1)).to.equal(
      "0xaBA7161A7fb69c88e16ED9f455CE62B791EE4D03"
    );
  });
});
