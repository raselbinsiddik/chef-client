// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCRvCWRbEBdyo8b-Z9t4LRUh2j1P4eyLg",
    authDomain: "the-chef-server.firebaseapp.com",
    projectId: "the-chef-server",
    storageBucket: "the-chef-server.appspot.com",
    messagingSenderId: "919459566614",
    appId: "1:919459566614:web:9c2cc2b3e794a00dca5137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
