import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Button
  } from '@chakra-ui/react'
import React from 'react'
import { ethers } from 'ethers';
//import { providers } from "ethers/providers";

import { Web3Provider } from '@ethersproject/providers';

export default function AddProducts() {
    // const abi=[
    //     {
    //         "inputs": [],
    //         "name": "owner",
    //         "outputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "",
    //                 "type": "address"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "_rentalAmount",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "post",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "productDamaged",
    //         "outputs": [
    //             {
    //                 "internalType": "bool",
    //                 "name": "",
    //                 "type": "bool"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "ren",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "rentProduct",
    //         "outputs": [],
    //         "stateMutability": "payable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "rentalAmount",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "renter",
    //         "outputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "",
    //                 "type": "address"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "bool",
    //                 "name": "_productDamaged",
    //                 "type": "bool"
    //             }
    //         ],
    //         "name": "reportProductDamage",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "stakeAmount",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     }
    // ];
    // const caddress = '0x728191469EC7Dc0Ed673F4d55fC2E04Db76EA661';
    // const {ethereum} = window as any;
    // if (!ethereum) {
    //     console.log("Ethereum provider not found. Make sure you have MetaMask or another Ethereum provider installed.");
    //     return;
    //   }

    //   // Create a Web3Provider and get the signer
    //   const provider = new Web3Provider(ethereum);
    //   const signer = provider.getSigner();

    //   // Create an instance of your contract
    //   const myContract = new ethers.Contract(caddress, abi, signer);

    //   // Check if the contract instance was created successfully
    //   if (myContract) {
    //     console.log("Contract instance created:", myContract);
    //   }
    //   if (!myContract) {
    //     console.log("contract did not connect");
    //   }
      
    //   const post= async () => {
    //     try {
    //       // Call your contract function (e.g., rewardClient)
    //        const transaction=await myContract.post(100000000000000,{ gasLimit: 20000000 });
    //        console.log(transaction)
    // await provider.waitForTransaction(transaction.hash)
    //         //await transaction.wait();
    //      // const txHash = receipt.transactionHash;
    //       console.log("Reward sent!");
    //     } catch (error: any) {
    //       if (error.message.includes("execution reverted")) {
    //         console.error("Transaction reverted:", error.reason);
    //         // Handle the revert gracefully, if needed
    //       } else {
    //         console.error("An error occurred while executing the contract function:", error);
    //       }
    //     }
    //   };

    

    return (
        <Box m={10}>
            <FormControl>
                <FormLabel>Product name</FormLabel>
                <Input type='text' />
                <FormLabel>Lending prize</FormLabel>
                <Input type='text' />
                <FormLabel>Description</FormLabel>
                <Input type='text' />
                <FormLabel>Image URL</FormLabel>
                <Input type='text' />
                <Button colorScheme='green' flex='1' width='20%' mt={8} 
                // onClick={post}
                // leftIcon={<BiLike />}
                >
                Borrow
                </Button>
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
        </Box>
    )
}