// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIiHLuOFMeaeuAqyg6r7GRMlR9tYLbKCA",
  authDomain: "fir-apptonghop.firebaseapp.com",
  projectId: "fir-apptonghop",
  storageBucket: "fir-apptonghop.appspot.com",
  messagingSenderId: "1054775434552",
  appId: "1:1054775434552:web:7fbe91a7b26432117b35cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();
export const auth = getAuth(app);
export {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
};