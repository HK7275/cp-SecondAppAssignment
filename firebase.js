import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_gG0VJiaQ7ySfnDhwpFcMSBS1Dw81Ls0",
    authDomain: "first-app-assingment.firebaseapp.com",
    projectId: "first-app-assingment",
    storageBucket: "first-app-assingment.appspot.com",
    messagingSenderId: "239281754975",
    appId: "1:239281754975:web:8b7f507a65100d48df9cea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)