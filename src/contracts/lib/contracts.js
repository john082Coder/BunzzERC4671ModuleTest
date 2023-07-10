// import Web3 from 'web3'
import * as Types from './types.js';
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,

} from './constants.js';


import Erc20Abi from './abi/erc20.json';

import ERC4671ABI from './abi/ERC4671.json' 

export class Contracts {
  constructor(provider, networkId, web3, options) {
    this.web3 = web3;
    this.defaultConfirmations = options.defaultConfirmations;
    this.autoGasMultiplier = options.autoGasMultiplier || 1.5;
    this.confirmationType =
        options.confirmationType || Types.ConfirmationType.Confirmed;
    this.defaultGas = options.defaultGas;
    this.defaultGasPrice = options.defaultGasPrice;
    console.log("this web3 = ", this.web3);
   
  
    this.erc20 = new this.web3.eth.Contract(Erc20Abi);

  
    this.ERC4671 = new this.web3.eth.Contract(ERC4671ABI);


    this.setProvider(provider, networkId);
    this.setDefaultAccount(this.web3.eth.defaultAccount);
  }

  setProvider(provider, networkId) {
    const setProvider = (contract, address) => {
      contract.setProvider(provider);
      if (address) contract.options.address = address;
      else console.error('Contract address not found in network', networkId);
    }

  
   
    setProvider(this.ERC4671, contractAddresses.ERC4671[networkId]);
   

   
  }

  setDefaultAccount(account) {
   
  }
}
