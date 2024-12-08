import React, {useState, createContext} from "react";
import * as firebase from "firebase/app";
import {authenticatechange, loginRequest, registerRequest} from "./authentication.service";
import { auth } from "./firebaseconfig";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    const onLogin = (email, password) => {
        seterronul()
        setIsLoading(true);
        loginRequest(email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });
    };
    const onRegister = (email, password, confirmPassword) => {
        seterronul()
        if (confirmPassword !== password) {
            setError("not confirmed password match password");
            return
        }

        setIsLoading(true);
        registerRequest(email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });
    }
    const seterronul = () => {
        setError("");
    }
    const onLogout = () =>{

    }
    auth.onAuthStateChanged((usr) => {
        if (usr) {
            setIsLoading(false);
            setUser(usr);
        } else {
            setIsLoading(false)
        }

    });

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                seterronul,
                onLogout
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};
