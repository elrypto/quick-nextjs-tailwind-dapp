import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { currentAddrAtom } from "../../recoil/atoms";
import {ethers } from 'ethers';

const ETH_REQUEST_ACCTS = 'eth_requestAccounts';
const ETH_GETBALANCE = 'eth_getBalance';
declare const window: any;



export async function requestAccount() {
  await window.ethereum.request({ method: ETH_REQUEST_ACCTS });
}


export async function getEthAddr() {
  const [account] = await window.ethereum.request({ method: ETH_REQUEST_ACCTS });
  return account;
}



const useEth = () => {
  // const [ethProvider, setEthProvider] = useState(null);
  const [windowProvider, setWindowProvider] = useState(null);
  const [ethersProvider, setEthersProvider] = useState(null);
  const [ethNetwork, setEthNetwork] = useState('');
  const [ethBal, setEthBal] = useState('');

  const mmAddr = useRecoilValue(currentAddrAtom);
  const [currentAddr, setCurrentAddr] = useState('');

  
  useEffect(() => {
    if (mmAddr) setCurrentAddr(mmAddr);
  }, [mmAddr])

 
  useEffect(() => {
    const getNetwork = async(provider) => {
      const tempNet = await provider.getNetwork();
      setEthNetwork(tempNet.name);
    }

    if (windowProvider){
      const tempEthers = new ethers.providers.Web3Provider(windowProvider);
      setEthersProvider(tempEthers);
      getNetwork(tempEthers);
    }
  }, [windowProvider])


        
 

  useEffect(() => {
    if (window) {
      if (window.ethereum) {
        console.log('have window ethereum now')
        window.ethereum.enable();
        setWindowProvider(window.ethereum);
      } else {
        console.log('no ethereum')
      }
    } else {
      console.log('no window')
    }
  }, [])


  return { 
    requestAccount, 
    getEthAddr, 
    currentAddr, 
    windowProvider, 
    ethersProvider, 
    ethNetwork 
  }
}
export default useEth;

