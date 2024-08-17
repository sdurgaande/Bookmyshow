import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'

export default function GridCategories({ data }) {

  const renderGridCategory = ({ item, index }) => {
    return (
      <View style={{
        height: 130, width: 80,
        margin: "1%", borderRadius: 10, backgroundColor: "#FCECFA"
      }}>
        <Image source={{ uri: "https://img.freepik.com/free-psd/close-up-delicious-ripe-apple_23-2151441914.jpg?semt=sph" }}
          style={{ width: 80, height: 80, alignItems: "center" }} />

        <Text style={{top:40,color:"#5c1083",fontSize:15,textAlign:"center"}} >{item}</Text>

      </View>
    )
  }

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <FlatList
        ItemSeparatorComponent={() =>
          <View style={{  height: 20 }} ></View>
        }
        scrollEnabled={false}
        numColumns={4}
        data={data}
        renderItem={renderGridCategory}
        ListFooterComponent={() => <View style={{marginBottom:40}}></View>
        }
      />
    </View>
  )
}
