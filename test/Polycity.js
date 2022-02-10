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
    // await PolycityDeployed.mint(1);

    expect(await PolycityDeployed.totalSupply()).to.equal(30);
  });
});
