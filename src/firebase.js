// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD25WeEsvU08hw97aTKhxM4fatr8VpF-k",
  authDomain: "lunchtime-login-cb48a.firebaseapp.com",
  projectId: "lunchtime-login-cb48a",
  storageBucket: "lunchtime-login-cb48a.firebasestorage.app",
  messagingSenderId: "553418242813",
  appId: "1:553418242813:web:4c94ca56e993b32a149c94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();