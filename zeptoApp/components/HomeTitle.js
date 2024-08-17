import React from 'react'
import { Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function HomeTitle({ title, subtitle }) {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: "space-between",
            marginTop: 10,
            alignItems: "center"
        }}>
            <Text style={{ fontSize: 18, color: "black", fontWeight: "700" }}>{title}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>

                <Text style={{ fontSize: 18, color: "#f20765", fontWeight: "700" }}>{subtitle}</Text>
                <AntDesign name="right" size={20} color={'#f20765'} />
            </View>
        </View>
    )
}
