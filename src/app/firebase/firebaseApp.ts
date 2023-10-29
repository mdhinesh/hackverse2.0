// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { analytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvv_DKCIDi9KRdSenTRlRkYkPNobC36AI",
  authDomain: "lendify-df9e8.firebaseapp.com",
  projectId: "lendify-df9e8",
  storageBucket: "lendify-df9e8.appspot.com",
  messagingSenderId: "818267273895",
  appId: "1:818267273895:web:9476a63e2eb7f5613af982",
  measurementId: "G-XJKBRNLCJ9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const initFirebase = () => {
    return app;
}

// if (typeof window !== 'undefined') {
//     // Only initialize Firebase Analytics in a browser environment
//     if (analytics.isSupported()) {
//       // Initialize Firebase Analytics here
//     }
// }