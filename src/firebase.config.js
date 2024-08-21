// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrbIV7xYNjplFhOTRPzHeLty2gnaK9jU0",
  authDomain: "product-hunt-e8c9b.firebaseapp.com",
  projectId: "product-hunt-e8c9b",
  storageBucket: "product-hunt-e8c9b.appspot.com",
  messagingSenderId: "322302945578",
  appId: "1:322302945578:web:a2db4721f672ef22e79653"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;