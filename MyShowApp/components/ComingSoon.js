import { View, Text,FlatList,Image } from 'react-native'
import React from 'react'
import {comingSoon} from '../utils/data'
import  AntDesign from 'react-native-vector-icons/AntDesign'


const ComingSoon = () => {
  return (
    <FlatList numColumns={2} 
    data={comingSoon} 
    renderItem={({ item, index }) => (
        <View style={{
            flex: 1,
            margin: "1%",
            height: "40%",
            borderRadius: 10
        }}   >

            <Image source={{ uri: item.img }}
                style={{
                    height: 400,
                    borderRadius: 10
                }} />
            <View style={{ position: "absolute", bottom: -220, left: 35, gap: 5 }}>
                <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>{item.title}</Text>
                <View style={{flexDirection:"row",  
                    gap:5,  alignItems:"center" }}>
                    <AntDesign  name="heart"  size={20} color={"red"}  />
                <Text style={{fontSize:14,color:"white",  fontWeight:"500"}}>{item.fav} </Text>
                </View>
            </View>
        </View>
    )} />
  )
}

export default ComingSoon