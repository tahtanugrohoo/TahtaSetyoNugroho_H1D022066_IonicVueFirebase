// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVUAhS2-2DMvZvzXv_t3SGdZmclwE0bUk",
  authDomain: "vue-firebase-ad753.firebaseapp.com",
  projectId: "vue-firebase-ad753",
  storageBucket: "vue-firebase-ad753.firebasestorage.app",
  messagingSenderId: "502813574308",
  appId: "1:502813574308:web:a35d52e8df8f2758039231",
  measurementId: "G-YFJKT9T4LG"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider,db };