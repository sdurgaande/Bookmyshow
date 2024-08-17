import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View>
            <Image style={{ height: 390, width: 400, objectFit: "fill", marginTop: 50 }}
                source={{ uri: "https://www.jharkhanditsolutions.com/wp-content/uploads/2023/05/Banner-1.png" }} />

            <View style={{ backgroundColor: "white", padding: 30, alignItems: "center" }}>
                <Text style={styles.heading}>Your Ultimate Doctor</Text>
                <Text style={styles.heading}  >Appointment Booking App</Text>
                <Text style={{
                    color: "black", marginTop: 18,
                    fontWeight: "700",
                    textAlign: "center"
                }} >
                    Book Appointment Effortlessly and manager your health journey </Text>
                <TouchableOpacity
                    onPress={() => console.log("clicked")}
                    style={styles.login} >
                    <Text style={{ fontSize: 20, color: "white" }} >Login With Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    heading: {
        fontSize: 28,
        fontWeight: "bold",
        color: "black"
    },
    login: {
        padding: 16,
        marginTop: 40,
        backgroundColor: "blue",
        borderRadius: 80,
        alignItems: "center",
        width: Dimensions.get('screen').width * 0.8
    }
})

