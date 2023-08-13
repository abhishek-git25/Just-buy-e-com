// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdVm4w81MRh0SRAeMYSx0zDbPKR86tA1k",
  authDomain: "just-buy-e-com.firebaseapp.com",
  projectId: "just-buy-e-com",
  storageBucket: "just-buy-e-com.appspot.com",
  messagingSenderId: "742319536845",
  appId: "1:742319536845:web:b5a99dd8a3e34585dc4784"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =  getAuth()