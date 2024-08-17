import { View, Text, FlatList, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { nowShowing } from '../utils/data'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const NowShowing = () => {

const nav= useNavigation()

    return (
        <FlatList numColumns={2}
            data={nowShowing}
            renderItem={({ item, index }) => (
                <TouchableOpacity
                
                onPress={() => {
                    // console.log(item.title)
                    nav.navigate('Details',{item})
                }}
                
                style={{
                    flex: 1,
                    margin: "1%",
                    height: "40%",
                    borderRadius: 10
                }}
                >

                    <Image source={{ uri: item.img }}
                        style={{
                            height: 400,
                            borderRadius: 10
                        }} />
                    <View style={{ position: "absolute", bottom: -220, left: 35, gap: 5 }}>
                        <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>{item.title}</Text>
                        <View style={{
                            flexDirection: "row",
                            gap: 5, alignItems: "center"
                        }}>
                            <AntDesign name="heart" size={20} color={"red"} />
                            <Text style={{ fontSize: 14, color: "white", fontWeight: "500" }}>{item.fav} %</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )} />

    )
}

export default NowShowing