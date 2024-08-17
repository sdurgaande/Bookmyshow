import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function CustomButton({ title, onPress }) {



    return (
        <TouchableOpacity onPress={onPress}
            style={{
                backgroundColor: "blue",
                justifyContent: "center",
                alignItems: "center",
                padding: 15,
                borderRadius: 10,
                marginTop: 10
            }}>
            <Text style={{
                color: "white", fontSize: 16,
                fontWeight: "600"
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
