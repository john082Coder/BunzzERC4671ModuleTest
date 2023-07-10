import { ethers } from 'ethers';

import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,
} from './lib/constants.js';
import { bnToDec } from './utils';
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});



export const getERC4671Contract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.ERC4671;
}

export const setErc20ContractAddress = (bunzz, address) => {
  bunzz.contracts.erc20.options.address = address;
}


export const mint = async (ERC4671Contract, address, account) => {
  return ERC4671Contract.methods.mint(address).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const revoke = async (ERC4671Contract, tokenId, account) => {
  return ERC4671Contract.methods.revoke(tokenId).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}



export const isValid = async (ERC4671Contract, tokenId ) => {
  
  try {
    const result = await ERC4671Contract.methods.isValid(tokenId).call();
    
  
    return result;
  } catch {
    console.log("error");
    return "";
  }

}

