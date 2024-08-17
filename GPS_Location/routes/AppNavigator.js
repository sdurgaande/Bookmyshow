import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home'
import SplashScreen from '../screens/splashScreen'



const Stack = createNativeStackNavigator();

export default function AppNavigator () {
 
    return (
      
        <Stack.Navigator  initialRouteName='Home' screenOptions={{headerShown:false}} >

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Splash" component={SplashScreen} />

      </Stack.Navigator>
        
    
    )
}

