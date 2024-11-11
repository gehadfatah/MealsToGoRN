import { auth } from "./firebaseconfig";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";


export const loginRequest = (email, password) =>
    signInWithEmailAndPassword(auth,email, password);
