import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { dates } from '../utils/data'
import { Theaters } from '../utils/data'
import { useNavigation } from '@react-navigation/native'




const Details = ({ route }) => {
    
const [date,setdate] = useState();


    // const { item } = route.params || {};
    // const { title } = item || {};
    

    const { item } = route.params || {};
    // Destructure title and image from item with fallbacks
    const { title = 'Default Title', img } = item || {};

    // Log the title and image for debugging
    console.log('Title:', title);
    console.log('Image:', img);

    const nav = useNavigation()

    const [isSelected, setisSelected] = useState();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", gap: 10 }}  >

            <View style={{
                flexDirection: "row",
                alignItems: "center",
                height: responsiveHeight(6),

                borderBottomColor: "#E3E3E3",
                borderBottomWidth: 2,
                paddingHorizontal: 13,
                justifyContent: "space-between"
            }}  >

                {/* child 1 */}

                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <AntDesign onPress={() => {
                        nav.goBack()
                    }} name="left" size={27} color="red" />
                    <Text style={{ color: "black", fontWeight: "700", fontSize: 19 }}  >{title}</Text>
                </View>

                {/* child 2 */}

                <AntDesign name="search1" size={27} color="red" />


            </View>
            {/* date picker */}

            <View style={{
                height: responsiveHeight(10),
                // backgroundColor: "red",
                alignItems: "center"
            }}>
                <FlatList horizontal
                    data={dates} renderItem={({ item, index }) =>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                setisSelected(index)
                                setdate(item)
                            }}

                            style={{
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                paddingHorizontal: 10,
                                marginHorizontal: 10,
                                backgroundColor: isSelected == index ? "red" : null
                            }}  >
                            <Text style={{ color: isSelected == index ? "white" : "red", fontWeight: "500", fontSize: 15 }}>
                                {item.day}
                            </Text>

                            <Text style={{ fontWeight: "800", fontSize: 18, color: isSelected == index ? "white" : "black" }}  >
                                {item.dat}
                            </Text>

                            <Text style={{ color: isSelected == index ? "white" : "black", fontWeight: "500", fontSize: 15 }} >
                                {item.mon}
                            </Text>

                        </TouchableOpacity>
                    }

                />



            </View>

            <FlatList showsVerticalScrollIndicator={false} style={{
                marginHorizontal: 20,

            }} data={Theaters} renderItem={({ item, index }) =>
                <View style={{
                    height: responsiveHeight(19),
                    borderWidth: 2,
                    marginBottom: 10,
                    borderRadius: 12,
                    borderColor: "#E3E3E3",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    gap: 10
                }} >
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }} >
                        <AntDesign name="hearto" size={25} color={"black"} />
                        <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>{item.name},</Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: "400", fontSize: 12 }} >Non-cancellable</Text>
                        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                            {
                                item.timings.map((value, index) => (
                                    <TouchableOpacity 
                                    onPress={() => {
                                        date!= null ?
                                        nav.navigate('Malls',{
                                            title,
                                            mall:item.name,
                                            date,
                                            time:value,
                                            img

                                        }):Alert.alert('Pleas Select date')
                                    }}
                                    key={index} style={{
                                        paddingHorizontal: 10,
                                        borderWidth: 2, borderColor: "green", marginRight: 5,
                                        borderRadius: 10, marginBottom: 7, paddingVertical: 5
                                    }}>
                                        <Text style={{ fontSize: 13, color: "green", }} >{value}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                </View>

            } />

        </SafeAreaView>
    )
}

export default Details