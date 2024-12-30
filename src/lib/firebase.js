
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-62be8.firebaseapp.com",
  projectId: "reactchat-62be8",
  storageBucket: "reactchat-62be8.firebasestorage.app",
  messagingSenderId: "56027117880",
  appId: "1:56027117880:web:7048ffc8f2d5cda73429cd"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()