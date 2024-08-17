import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Store } from '../Context/Wrapper'


const Header = () => {
  const {data,setdata}=useContext(Store)
  return (
    <View    style={{
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 10
      }} >
        <View style={{
        flexDirection: "row",
        alignItems: "center"

      }} >
        <AntDesign name="enviroment" size={40} color={"red"} />
        <Text style={{
          color: "red",
          fontSize: 18,
          fontWeight: "bold"
        }}>
          {data != null?data:"Select city "}
        
        </Text>
        
      </View>
      <AntDesign onPress={() =>{
        AsyncStorage.removeItem("login")
      } } name="search1" size={30} color={"red"}  />
    </View>
  )
}

export default Header



