import { Card as MyCard, CardHeader, CardBody, CardFooter, Button, Flex, Avatar, Heading, IconButton, Text, Image, ColorModeScript, useColorModeValue } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';

import { Web3Provider } from '@ethersproject/providers';
import { ethers } from 'ethers';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'


// params: { imageURL: string, title: string, description: string, cost: number }
export default function Card(params: any) {

    const bg = useColorModeValue('red.500', 'red.200')
    const color = useColorModeValue('white', 'gray.800')  

    const { isOpen, onOpen, onClose } = useDisclosure();
    const leastDestructiveRef = useRef(null);

    const [ isborrowed, setIsBorrowed ] = useState(true)

    const [cost, setCost] = useState(100)    

    const [ isProductAdd, setisProductAdd ] = useState(false)

    // @ts-nocheck 
    const [formData, setFormData] = useState({
        productName: '',
        lendingPrize: '',
        description: '',
        imageUrl: '',
      });
    
      const [formDataArray, setFormDataArray] = useState([]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleBorrowClick = () => {
        // @ts-nocheck 
        let tempformDataArray = JSON.parse(localStorage.getItem('formDataArray') ?? '') || [];
        const newFormDataArray = [...tempformDataArray, formData];
        localStorage.setItem('formDataArray', JSON.stringify(newFormDataArray));

        // Optionally, you can also reset the form fields after saving to localStorage.
        setFormData({
            productName: '',
            lendingPrize: '',
            description: '',
            imageUrl: '',
        });
        setisProductAdd(false)
        post()
      };


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
      // @ts-nocheck 
      const myContract = new ethers.Contract(caddress, abi, signer);

      // Create an instance of your contract
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
          
            setIsBorrowed(false)

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

    // const getLocalStorage = () => {
    //     const data = localStorage.getItem('isProductAdd')
    //     if(data) {
    //         setisProductAdd(true)
    //     }
    // }

    
      useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formDataArray')) || [];
        setFormDataArray(storedData);
      }, []);

    return (
        <Box m="10">

        {
            isProductAdd ? 
            <>
            <Box m={10}>
            <FormControl>
      <FormLabel>Product name</FormLabel>
      <Input
        type='text'
        name='productName'
        value={formData.productName}
        onChange={handleChange}
      />
      <FormLabel>Lending prize</FormLabel>
      <Input
        type='text'
        name='lendingPrize'
        value={formData.lendingPrize}
        onChange={handleChange}
      />
      <FormLabel>Description</FormLabel>
      <Input
        type='text'
        name='description'
        value={formData.description}
        onChange={handleChange}
      />
      <FormLabel>Image URL</FormLabel>
      <Input
        type='text'
        name='imageUrl'
        value={formData.imageUrl}
        onChange={handleChange}
      />
      <Button
        colorScheme='green'
        flex='1'
        width='20%'
        mt={8}
        onClick={handleBorrowClick}
      >
        Add Product
      </Button>
    </FormControl>
            </Box>

            </>
            : 
        <Flex align="center" justify="center" gap='2' >
        <MyCard maxW='md'>
        <CardHeader>
            <Flex gap='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name={params.title} src='' />

                <Box>
                <Heading size='sm'>{params.title}</Heading>
                {/* <Text>Creator, Chakra UI</Text> */}
                </Box>
            </Flex>
            {/* <IconButton
                variant='ghost'
                colorScheme='gray'
                aria-label='See menu'
                icon={<BsThreeDotsVertical />}
            /> */}
            </Flex>
        </CardHeader>
        <Image
            objectFit='cover'
            // src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            src={params.imageURL || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ANo_image_available.svg&psig=AOvVaw22o1ZGkY6dGs0trkjmOzPw&ust=1698646499893000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCPDekrzNmoIDFQAAAAAdAAAAABAE"}
            alt='Chakra UI'
        />

        <CardBody>
            <Text>
                {params.description}
            </Text>
        </CardBody>
        <CardFooter
            justify='space-between'
            flexWrap='wrap'
            sx={{
            '& > button': {
                minW: '136px',
            },
            }}
            gap={10}
        >{
            isborrowed ? <Button colorScheme='green' flex='1' onClick={onOpen} width='50%'
            // leftIcon={<BiLike />}
            >
            Borrow
            </Button> :                 <Button flex='1' colorScheme='red' width='50%' onClick={reportProductDamage}
            // leftIcon={<BiChat />}
            >
            Report Damage
            </Button>

        }
            <Button flex='1' colorScheme='red' width='50%' onClick={() => {
                setisProductAdd(true)
            }}
            >
                Add Product
            </Button>
            {/* <Button flex='1' variant='ghost' 
            // leftIcon={<BiShare />}
            >
            Share
            </Button> */}
        </CardFooter>
        </MyCard>
        </Flex>
        }

       <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={leastDestructiveRef}
            onClose={onClose}
            isCentered
    >
            <AlertDialogOverlay />

            <AlertDialogContent>
            <AlertDialogHeader>Current Highest Bid ${cost}</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
                Are you sure you want to borrow this item for the highest bid?
            </AlertDialogBody>
            <AlertDialogFooter>
            <Button ref={leastDestructiveRef} onClick={onClose}>
                No
                </Button>
                <Button colorScheme='red' ml={3} onClick={rentProduct}>
                Yes
                </Button>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </Box>
    )
}