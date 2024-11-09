import * as firebase from "firebase";
import { auth } from "./firebaseconfig";

export const loginRequest = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);
