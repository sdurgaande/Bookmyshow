import { View, Text,  TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import React, { useState }  from 'react'
import Header from '../components/Header'

import ComingSoon from '../components/ComingSoon'
import NowShowing from '../components/NowShowing'


const Home = () => {
  const [option, setOption] = useState(0)
  return (
    <SafeAreaView style={{flex:1,gap:20}}>
      <Header />
      <View  style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
      }} >
        <TouchableOpacity onPress={() =>
          setOption(0)
        }>
          <Text style={{
            color: option == 0 ? "red" : "grey",
            fontSize: 18,
            fontWeight: "bold"
          }}>
            Now Showing</Text>
            {
              option== 0 && <View style={{backgroundColor:"red",  
              width:50, height:4, alignSelf:"center", marginTop:5 }} >

              </View>
            }
        </TouchableOpacity>


        <TouchableOpacity onPress={() =>
          setOption(1)} >
          <Text style={{
            color: option == 1 ? "red" : "grey",
            fontSize: 18,
            fontWeight: "bold"
          }} >
            Coming Soon</Text>
            {
              option== 1 && <View style={{backgroundColor:"red",  
              width:50, height:4, alignSelf:"center", marginTop:5 }} >

              </View>
            }
        </TouchableOpacity>
      </View>
      {
        option == 0 ? <NowShowing /> : <ComingSoon />
      }
    </SafeAreaView>
  )
}

export default Home