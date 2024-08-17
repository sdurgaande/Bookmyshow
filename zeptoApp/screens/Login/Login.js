import React, { useEffect, useState } from 'react'
import { StatusBar, Text, View, Image, TouchableOpacity } from 'react-native'
import AppWrapper from '../../components/AppWrapper'
import { myColors } from '../../utils/thems/colors'
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage'



export default function LoginScreen() {

  // useEffect(() => {
  //   GoogleSignin.configure();
  // }, [])

  const Login = async (navigation) => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo) {
        await AsyncStorage.setItem('key', JSON.stringify(userInfo));
      navigation.replace('Home')
      }


    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // User cancelled the login flow
        console.log('Sign-In Cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Operation (e.g. sign-in) is in progress already
        console.log('IN_PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Play services not available or outdated
        console.log('Play Services Not Available');
      } else {
        // Some other error happened
        console.log('error Pleas try again later');
      }
    }
  };


  return (
    <AppWrapper>
      <StatusBar backgroundColor={myColors.Violet} />
      <View style={{
        flex: 1,
        backgroundColor: myColors.Violet, paddingHorizontal: 20
      }}>
        <View style={{ flex: 0.5 }}>

          <Image style={{ width: responsiveWidth(70), height: 100 }}
            source={{ uri: "https://entrackr.com/storage/2021/12/Zepto.jpg" }} />

          <Text style={{
            color: myColors.white, fontSize: responsiveFontSize(2),
            textAlign: 'center', top: -22, letterSpacing: 1.5
          }}>10 Minutes Delivery</Text>

        </View>
        <View style={{ flex: 0.5, justifyContent: 'center' }}>

          <TouchableOpacity
            onPress={Login}
            activeOpacity={0.8}
            style={{
              backgroundColor: 'white', padding: 15,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10

            }}>
            <AntDesign name='google' size={20} color='black' />
            <Text style={{
              color: 'black', fontSize: responsiveFontSize(2),
              textAlign: 'center', fontWeight: '700'
            }}>SignIn With Google</Text>


          </TouchableOpacity>
          <Text style={{
            color: 'white', fontSize: responsiveFontSize(1.5),
            fontWeight: '400', textAlign: 'center', top: 10
          }}>I accept the terms and privacy policy</Text>

        </View>
      </View>
    </AppWrapper>
  )
}
