const { ethers } = require('ethers');
const VendorRegistry = require('./VendorRegistry.json'); // ABI of the contract

async function deploy() {
  const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
  const wallet = new ethers.Wallet('PRIVATE_KEY', provider);
  const factory = new ethers.ContractFactory(VendorRegistry.abi, VendorRegistry.bytecode, wallet);
  const contract = await factory.deploy();
  console.log('Contract deployed at:', contract.address);
}

deploy();
