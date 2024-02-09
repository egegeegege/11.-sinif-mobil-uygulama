import { Text, SafeAreaView, StyleSheet } from 'react-native';
import{NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";



import HomeScreen from "../Screens/Home.js";
import LoginScreen from "../Screens/Login.js";
const Stack=createNativeStackNavigator();

export default function Route() {
  return (
   <NavigationContainer>
   <Stack.Navigator intialRoutName="Login">
   <Stack.Screen name="Home" component={HomeScreen}/>
   <Stack.Screen name="Login" component={LoginScreen}/>
   </Stack.Navigator>
   </NavigationContainer>
  )
};
