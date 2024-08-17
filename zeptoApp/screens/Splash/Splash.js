import React, { useEffect } from 'react'
import { Image, StatusBar, Text, View } from 'react-native'
import AppWrapper from '../../components/AppWrapper'
import { myColors } from '../../utils/thems/colors'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('key').then((result) => {
        if (result) {
          navigation.replace('Home')
        } else {
          navigation.replace('Login')
        }
      }).catch((err) => {
        console.log(err)
      });


    }, 2000);
  }, []);

  return (
    <AppWrapper>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: myColors.Violet }}>
        <StatusBar hidden />
        <Image style={{ width: responsiveWidth(100), height: 300 }}
          source={{ uri: "https://entrackr.com/storage/2021/12/Zepto.jpg" }} />

      </View>
    </AppWrapper>
  )
}
