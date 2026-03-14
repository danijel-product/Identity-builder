import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import OnBoardingOne from "../Screens/OnBoardingOne";
import OnBoardingTwo from "../Screens/OnBoardingTwo";
import TabNavigator from "./TabNavigator";
import Button from "../Components/Button";

const Stack = createNativeStackNavigator()

export default function StackNavigator() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="OnBoardingOne" component={OnBoardingOne}/>
            <Stack.Screen name="OnBoardingTwo" component={OnBoardingTwo}/>
            <Stack.Screen name="HomeScreen" component={TabNavigator}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'transparent'
    },
    icon: {
        tintColor: '#333'
    }
})
