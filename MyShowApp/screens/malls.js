import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { Seats } from '../utils/data'
import Availability from "../screens/Availability"
import { MallSeatsContext } from '../Context/Wrapper';





const Malls = ({ route }) => {


  const { title, mall, date, time, img } = route.params;


  // console.log(date.dat)
  const [seatsArray, setSeatsArray] = useContext(MallSeatsContext)
  let amount = 0

  if (seatsArray.length > 0) {
    amount = 100 * seatsArray.length
  }

  const nav = useNavigation()

  return (
    <SafeAreaView style={{
      paddingHorizontal: 10,
      flex: 1, backgroundColor: "white", gap: 10
    }} >
      <View style={{
        flexDirection: "row",
        alignItems: "center", gap: 10,
        height: responsiveHeight(6),
        borderBottomColor: "#E3E3E3",
        borderBottomWidth: 3,
      }}>
        <AntDesign onPress={() => {
          nav.goBack()
          // Adding now

        }} name="left" size={30} color={"red"}

        />
        <Text style={{ fontWeight: "700", color: "black", fontSize: 16 }} >{title}</Text>
      </View>
      <Text style={{ color: "grey", fontSize: 18, fontWeight: "500" }}>
        {mall} |{date.dat}th Date | {time}</Text>
      <View style={{ alignItems: "center" }} >
        <FlatList numColumns={6} data={Seats}
          renderItem={({ item, index }) =>
            seatsArray.includes(item) ? (

              <TouchableOpacity
                onPress={() => {
                  setSeatsArray(seatsArray.filter(remove => remove != item))
                }}

                style={{
                  backgroundColor: "green", width: 40, height: 40,
                  borderTopLeftRadius: 10, borderTopRightRadius: 10,
                  margin: "3%"
                }}></TouchableOpacity>) : (<TouchableOpacity
                  onPress={() => { setSeatsArray([...seatsArray, item]) }}

                  style={{
                    backgroundColor: "#E3E3E3", width: 40, height: 40,
                    borderTopLeftRadius: 10, borderTopRightRadius: 10,
                    margin: "3%"
                  }}></TouchableOpacity>)} />
      </View>

      <View style={{
        flexDirection: "row", alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginTop: 20
      }}>


        <Availability colors={'red'} name={'UnAvailable'} />
        <Availability colors={'grey'} name={'Availble'} />
        <Availability colors={'green'} name={'Selected'} />
      </View>

      <View style={{ justifyContent: "flex-end", flex: 0.8 }} >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            amount == 0 ? Alert.alert('Pleas Select Seats') : nav.navigate('MyTicket', {
              title,
              img,
              mall,
              time,
              date: date.dat
            })
          }}
          style={{
            height: 50, backgroundColor: "red",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
            paddingHorizontal: 30
          }} >

          <Text style={{ color: "white", fontWeight: "800", fontSize: 17 }}>Pay Now</Text>
          <Text style={{ color: "white", fontWeight: "800", fontSize: 17 }} >₹ {amount}</Text>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Malls   