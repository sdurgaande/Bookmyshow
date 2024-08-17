import React from 'react'
import { Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash/Splash'
import LoginScreen from '../screens/Login/Login'
import HomeScreen from '../screens/Home/Home'
import DetailsScreen from '../screens/Details/Details'
import CartScreen from '../screens/Cart/Cart'
import WishlistScreen from '../screens/Wishlist/Wishlist'



const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
       
            <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }} >

                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />
                <Stack.Screen name="Wishlist" component={WishlistScreen} />


            </Stack.Navigator>

       
    )
}
