import React, { useState, createContext } from "react";

import {loginRequest, registerRequest} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
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
    const onRegister = (email, password,confirmPassword) => {
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
    const seterronul= ()=>{
        setError("");
    }
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin, onRegister,seterronul
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
