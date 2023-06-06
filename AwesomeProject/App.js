import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
// import React, { useState } from "react";
// import * as Font from 'expo-font';
import { View, StyleSheet, Text } from 'react-native';
import RegistrationScreen from "./Screens/RegistrationScreen";


export default function App() {
  const [fontsLoaded] = useFonts({
    'r-bolt': require('./fonts/Roboto-Bold.ttf'),
    'r-medium': require('./fonts/Roboto-Medium.ttf'),
    'r-regular': require('./fonts/Roboto-Regular.ttf'),
    })

    if (!fontsLoaded) {
      return null;
    }

    return (
      <View style={styles.container}>
        < RegistrationScreen />
        <Text style={styles.title}>Hello!It is my first app 😍</Text>
        <StatusBar style="auto" />
      </View>
    );
 
}


const styles = StyleSheet.create(
  {
  container: {
    flex:1,
    ...Platform.select({
       ios: {
        backgroundColor: 'yellow'
     },
      android: {
       backgroundColor: '#ffffff'
     },
    }
   )},

   title: {
    ...Platform.select({
      ios: {
      fontFamily: 'r-bolt', 
      fontSize: 30,
      backgroundColor: '#ffffff'
    },
     android: {
      backgroundColor: 'yellow',
      fontFamily: 'r-regular', 
      fontSize: 20,
    },
   })
  },
}
)

