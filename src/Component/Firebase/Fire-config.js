// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC49l8eVAfIj0Q2BDEa7pe19QzP261UikY",
  authDomain: "auth-firebase-tailwiend.firebaseapp.com",
  projectId: "auth-firebase-tailwiend",
  storageBucket: "auth-firebase-tailwiend.appspot.com",
  messagingSenderId: "335454205951",
  appId: "1:335454205951:web:e3f53a28335034dd88d9ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;