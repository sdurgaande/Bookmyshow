import React, { Component, useEffect } from 'react'
import { Text, View,StatusBar,Image} from 'react-native'

export default function SplashScreen (navigation) {
   useEffect(()=>{
  setTimeout(()=>{
  
  },3000)
   },[])
    return (
      <View style={{flex:1,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
        <StatusBar hidden />
        <Image style={{height:250,width:"100%",resizeMode:"contain"}}  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Y2KMRr6DVWcVtkLFLegOsDsgMxatx_OQ3Q&s"}} />
      </View>
    )
  }

