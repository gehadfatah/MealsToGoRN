import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseconfig = {
    apiKey: "AIzaSyBCclmyvxIG6m0EB3W5LMaWCeW3zFyFdz0",
    authDomain: "todotaskapp-f9e7b.firebaseapp.com",
    databaseURL: "https://todotaskapp-f9e7b.firebaseio.com",
    projectId: "todotaskapp-f9e7b",
    storageBucket: "todotaskapp-f9e7b.appspot.com",
    messagingSenderId: "137896965462",
    appId: "1:137896965462:web:7a31b78d108caabfed92f7"
};


const app = initializeApp(firebaseconfig);

export const auth = getAuth(app);
