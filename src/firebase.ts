// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD23xTcmOXzrSXW9V4NeiiHxV0Rqui6pNA",
    authDomain: "meishi-c4d94.firebaseapp.com",
    projectId: "meishi-c4d94",
    storageBucket: "meishi-c4d94.appspot.com",
    messagingSenderId: "820151207792",
    appId: "1:820151207792:web:99e3bdf8848791782af1b5",
    measurementId: "G-N7L5NSJE9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);