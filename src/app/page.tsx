"use client"

import Image from 'next/image'
import Body from "./components/HeroSection";
import Feature from "./components/Features"
import Card from './components/Card';
import Alert from './components/Alert';
import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
// import { initFirebase } from './firebase/firebaseApp';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';


export default function Home() {

  // initFirebase()
  // const provider = new GoogleAuthProvider();
  // const auth = getAuth();

  // const signIn =async () => {
  //   const result  = await signInWithPopup(auth, provider);
  //   console.log(result.user)
  // }

  // const app = initFirebase();
  // console.log(app)

  const [ allData, setAllData ] = useState([]);

  const getAllData = () => {
    setAllData(JSON.parse(localStorage.getItem('formDataArray')) || []);
  }

  useEffect(() => {
    getAllData();
  })

  return (
    <main className="">
      {/* <Body/>
      <Feature/> */}
      <Card 
        imageURL="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
        title="Example Product" 
        description="This is a Example product"
        cost={10}
      />
        {allData.map((data: any, index: any) => (
              <Card 
                key={index}
                imageURL={data.imageUrl}
                title={data.productName}
                description={data.lendingPrize}
                cost={data.description}
              />
        ))}
      {/* <Card/> */}
    </main>
  );
}
