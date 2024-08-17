import { View, Text } from 'react-native'
import React from 'react'

const Availability = ({colors,name}) => {
    return (
        <View style={{
            flexDirection: "row", alignItems: "center"
        }}>
            <View style={{
                backgroundColor:colors,
                width: 20, height: 20,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                marginRight: 10,
            }} ></View>
           
                <Text  style={{fontWeight:"800", fontSize:16,  color:"grey"}} >{name}</Text>
            
        </View>
    )
}

export default Availability