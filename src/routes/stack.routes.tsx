import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../screens/Welcome";
import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";
import { CompanyProfile } from "../screens/CompanyProfile";

const { Screen, Navigator } = createNativeStackNavigator();

export function UserRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="CompanyProfile" component={CompanyProfile}/>
    </Navigator>
  );
}
