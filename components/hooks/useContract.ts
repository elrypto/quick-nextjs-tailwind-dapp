import {ethers } from 'ethers';


export enum SUPPORTED_TOKENS {
  ETH = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
  WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  LINK = '0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c',
  USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  WBTC = '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
}


const useContract = (ethersProvider) => {

  const createContract = async(nameorAddr: string, abi: ethers.ContractInterface) => {
    if (!ethersProvider){
      console.error('ethers provider not available yet, watch and wait for it to be initialized first')
      return;
    }
    
    return await new ethers.Contract(nameorAddr, abi, ethersProvider.getSigner());
  }
  
  return { createContract };
}
export default useContract;