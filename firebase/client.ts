// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvohoe0Rca6YwgPNJOFWGiDPCGutScigI",
  authDomain: "mockmentor-ed319.firebaseapp.com",
  projectId: "mockmentor-ed319",
  storageBucket: "mockmentor-ed319.firebasestorage.app",
  messagingSenderId: "319794728556",
  appId: "1:319794728556:web:abe30a988a74b64e641249",
  measurementId: "G-6CPT0L36KP"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);