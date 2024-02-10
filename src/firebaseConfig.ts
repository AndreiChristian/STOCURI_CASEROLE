// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFQ5TQ1aso8e3IpChJvuDgBTpsN0-qCSg",
  authDomain: "stocuri-caserole.firebaseapp.com",
  databaseURL: "https://stocuri-caserole-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "stocuri-caserole",
  storageBucket: "stocuri-caserole.appspot.com",
  messagingSenderId: "731759263140",
  appId: "1:731759263140:web:ebf405ef14fb904c8fd531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
