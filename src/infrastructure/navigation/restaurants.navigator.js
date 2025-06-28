import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
        headerShown={false}
        screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerStyle: {
          backgroundColor: "white", // iOS-like solid background
          borderBottomWidth: 0, // Remove bottom border
          elevation: 0, // Remove Android shadow
          shadowOpacity: 0, // Remove iOS shadow
        },
        headerTitleAlign: "center", // Center title (iOS-like)
        headerBackTitleVisible: false, // Hide back button text
        headerTransparent: false,
        headerBlurEffect: "none", // Disable iOS blur
      }
    }
    >
      <RestaurantStack.Screen
        name="restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
