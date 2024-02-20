// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvJaCWCezMX4QobBg5CuZyqyY6ISbOJtU",
  authDomain: "ecommerce-c3b48.firebaseapp.com",
  projectId: "ecommerce-c3b48",
  storageBucket: "ecommerce-c3b48.appspot.com",
  messagingSenderId: "125170038858",
  appId: "1:125170038858:web:8797d984a4fa4fcac68eb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}