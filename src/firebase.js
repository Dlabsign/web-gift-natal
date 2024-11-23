// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD88Rwa462eFWKFnEVMrhQqL3PGpguC7c",
  authDomain: "giftcard-8c286.firebaseapp.com",
  databaseURL: "https://giftcard-8c286-default-rtdb.firebaseio.com",
  projectId: "giftcard-8c286",
  storageBucket: "giftcard-8c286.firebasestorage.app",
  messagingSenderId: "65300787647",
  appId: "1:65300787647:web:939a4621310954f432710a",
  measurementId: "G-L4D6G33XTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);