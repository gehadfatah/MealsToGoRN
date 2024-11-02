import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase/app";
import { getAuth ,signInWithEmailAndPassword} from "firebase/auth";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

const firebaseConfig = {
  apiKey: "AIzaSyBCclmyvxIG6m0EB3W5LMaWCeW3zFyFdz0",
  authDomain: "todotaskapp-f9e7b.firebaseapp.com",
  databaseURL: "https://todotaskapp-f9e7b.firebaseio.com",
  projectId: "todotaskapp-f9e7b",
  storageBucket: "todotaskapp-f9e7b.appspot.com",
  messagingSenderId: "137896965462",
  appId: "1:137896965462:web:7a31b78d108caabfed92f7"
};

if (firebase.getApps().length > 0)
  firebase.initializeApp(firebaseConfig);
const auth = getAuth();

export default function App() {
  const [isAuthentacation, setIsAuthentacation] =useState(false);

  useEffect(()=>{
    signInWithEmailAndPassword(auth, "gehad.abdelfatah45@gmail.com", "test123")
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log("succes get user ",user);
          setIsAuthentacation(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorMessage);
        });
  },[]);
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
