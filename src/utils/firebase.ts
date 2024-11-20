// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBWIA2dvvLGecUSIq7LO0V1nfaeY4JnfCo",
    authDomain: "vue-firebase-41eeb.firebaseapp.com",
    projectId: "vue-firebase-41eeb",
    storageBucket: "vue-firebase-41eeb.firebasestorage.app",
    messagingSenderId: "646929090731",
    appId: "1:646929090731:web:d52d2a1a48a2c2302b4fee",
    measurementId: "G-GHMHWYPHQG"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };