import React from 'react'
import { ethers } from 'ethers';
//import { providers } from "ethers/providers";

import { Web3Provider } from '@ethersproject/providers';
const Nbala = () => {
    const abi=[
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_rentalAmount",
                    "type": "uint256"
                }
            ],
            "name": "post",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "productDamaged",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "ren",
                    "type": "address"
                }
            ],
            "name": "rentProduct",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "rentalAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renter",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "_productDamaged",
                    "type": "bool"
                }
            ],
            "name": "reportProductDamage",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "stakeAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const caddress = '0x728191469EC7Dc0Ed673F4d55fC2E04Db76EA661';
    const {ethereum} = window as any;
    if (!ethereum) {
        console.log("Ethereum provider not found. Make sure you have MetaMask or another Ethereum provider installed.");
        return;
      }

      // Create a Web3Provider and get the signer
      const provider = new Web3Provider(ethereum);
      const signer = provider.getSigner();

      // Create an instance of your contract
      // @ts-nocheck 
      const myContract = new ethers.Contract(caddress, abi, signer);

      // Check if the contract instance was created successfully
      if (myContract) {
        console.log("Contract instance created:", myContract);
      }
      if (!myContract) {
        console.log("contract did not connect");
      }
      
      const post= async () => {
  

        try {
          
        
          // Call your contract function (e.g., rewardClient)
           const transaction=await myContract.post(100000000000000,{ gasLimit: 20000000 });
           console.log(transaction)
    await provider.waitForTransaction(transaction.hash)
            //await transaction.wait();
         // const txHash = receipt.transactionHash;
          console.log("Reward sent!");
        } catch (error: any) {
          if (error.message.includes("execution reverted")) {
            console.error("Transaction reverted:", error.reason);
            // Handle the revert gracefully, if needed
          } else {
            console.error("An error occurred while executing the contract function:", error);
          }
        }
      };

      const rentProduct= async () => {
  

        try {
          
        
          // Call your contract function (e.g., rewardClient)
           const transaction=await myContract.rentProduct('0x0259F04e02876b73D5C7D51eb15313215142a810',{ value: ethers.parseEther('0.0002'),gasLimit: 20000000 });
           console.log(transaction)
    await provider.waitForTransaction(transaction.hash)
            //await transaction.wait();
         // const txHash = receipt.transactionHash;
          console.log("Reward sent!");
        } catch (error: any) {
          if (error.message.includes("execution reverted")) {
            console.error("Transaction reverted:", error.reason);
            // Handle the revert gracefully, if needed
          } else {
            console.error("An error occurred while executing the contract function:", error);
          }
        }
      };
      const reportProductDamage= async () => {
  

        try {
          
        
          // Call your contract function (e.g., rewardClient)
           const transaction=await myContract.reportProductDamage(0,{gasLimit: 20000000 });
           console.log(transaction)
    await provider.waitForTransaction(transaction.hash)
            //await transaction.wait();
         // const txHash = receipt.transactionHash;
          console.log("Reward sent!");
        } catch (error: any) {
         if (error.message.includes("execution reverted")) {
        console.error("Transaction reverted:", error.reason);
        // Handle the revert gracefully, if needed
      } else {
        console.error("An error occurred while executing the contract function:", error);
      }
        }
      };
  return (
    <div>Nbala
        <button onClick={post}>post</button>
        <button onClick={rentProduct}>rentProduct</button>
        <button onClick={reportProductDamage}>rentProductDamaged</button>
    </div>
  )
}

export default Nbala