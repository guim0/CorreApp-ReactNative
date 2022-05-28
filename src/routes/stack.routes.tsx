
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../screens/Welcome";
import { StatusBar } from "expo-status-bar";

const { Screen, Navigator } = createNativeStackNavigator();

export function UserRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Welcome" component={Welcome} />
    </Navigator>
  );
}
