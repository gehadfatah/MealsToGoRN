import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyBCclmyvxIG6m0EB3W5LMaWCeW3zFyFdz0",
    authDomain: "todotaskapp-f9e7b.firebaseapp.com",
    databaseURL: "https://todotaskapp-f9e7b.firebaseio.com",
    projectId: "todotaskapp-f9e7b",
    storageBucket: "todotaskapp-f9e7b.appspot.com",
    messagingSenderId: "137896965462",
    appId: "1:137896965462:web:7a31b78d108caabfed92f7"
};

// Create a Firebase app instance variable
let app;
let auth;

if (!app) {
    // Initialize Firebase app and auth only once
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    });
}

export { app, auth };
