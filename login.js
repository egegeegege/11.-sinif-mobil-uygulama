import { Text, SafeAreaView, Button } from 'react-native';
import React from "react"

export default function Login() {
  return (
    <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"orange"}}>  
    
    <Button title="Anasayfa" onPress={()=>navigation.navigate("Home")}/ >

     <Button title="Go Back" onPress={()=>navigation.goBack()}/ >

      <Button title="Go Back" onPress={()=>navigation.nopTopTop()}/ >
    </SafeAreaView>
  );
}
