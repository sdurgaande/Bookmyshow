/**
 * @format
 */


import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import PostalDetailsSearch from './postaldetails/postalsearch'

import MyLocation from './new/new'
import HomeScreen from './zeptoApp/screens/Home/Home'

import AppNavigator from './GPS_Location/routes/AppNavigator'



AppRegistry.registerComponent(appName, () => App );