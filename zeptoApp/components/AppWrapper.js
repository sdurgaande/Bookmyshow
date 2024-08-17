import React, { Children } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

export default function AppWrapper({children}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
        {children}
    </SafeAreaView>
  )
}
