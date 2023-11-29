// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxLjM3K4tqIncgr89t-bAKw-VHVlL3f-Y",
  authDomain: "final-metro.firebaseapp.com",
  projectId: "final-metro",
  storageBucket: "final-metro.appspot.com",
  messagingSenderId: "746040836701",
  appId: "1:746040836701:web:83801ce2eff4da875383b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app