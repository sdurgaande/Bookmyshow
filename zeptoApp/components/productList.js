import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function ProductList({ data }) {
    const renderProducts = ({ item, index }) => {
        return (
            <View style={{
                borderRadius: 10,
                height: 230, width: 160,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              
                borderWidth: 2,
                borderColor: "#EFE3E3"
            }} >
                <Image resizeMode='cover' source={{ uri: item.image }}
                    style={{ flex: 0.55, borderRadius: 10, backgroundColor: "white" }} />


                <View style={{
                    flex: 0.4, paddingHorizontal: 10, gap: 5,
                    backgroundColor: 'white', borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10
                }}>
                    <Text style={{
                        fontSize: 18,
                        color: "black",
                        fontWeight: "600"
                    }} >{item.name}</Text>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        // fontWeight: "400"
                    }} >{item.grams} grams</Text>

                    <View style={{
                        flexDirection: "row", alignItems: 'center',
                        justifyContent: "space-between"
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 15,
                                color: "black",
                                fontWeight: "500",
                                textDecorationLine:"line-through"
                            }}  > ₹ {item.price} </Text>
                            <Text style={{
                                fontSize: 16,
                                color: "#99267c",
                                fontWeight: "500"
                            }} > ₹ {item.discounted_price} </Text>

                        </View>
                        < AntDesign name="plussquareo" size={28} style={{ color: "#f20765" }} />
                    </View>

                </View>
            </View>
        );

    };
    return (
        <View style={{ marginTop: 10 }} >
            <FlatList showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View
                    style={{ width: 20 }} ></View>}
                horizontal data={data}
                renderItem={renderProducts} />
        </View>
    )
}
