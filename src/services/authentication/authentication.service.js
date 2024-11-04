import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseconfig";


export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth,email, password);
