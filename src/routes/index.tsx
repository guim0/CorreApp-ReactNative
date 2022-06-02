import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { UserRoutes } from "./stack.routes";



export function Routes(){
    return(
        <NavigationContainer>
            <UserRoutes/>
            <StatusBar barStyle={"default"}/>
        </NavigationContainer>
    )
}