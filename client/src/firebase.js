// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-ea12f.firebaseapp.com",
  projectId: "mern-auth-ea12f",
  storageBucket: "mern-auth-ea12f.appspot.com",
  messagingSenderId: "719686629265",
  appId: "1:719686629265:web:1652d5d321ac6192398c30",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
