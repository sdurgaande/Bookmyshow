import { View, Text, Image, TouchableOpacity } from 'react-native'
import React,{useState,useContext} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'
import { MallSeatsContext, Store } from '../Context/Wrapper';



const MyTicket = ({route}) => {

    const [seatsArray, setSeatsArray] = useContext(MallSeatsContext);

    const {data,setdata}=useContext(Store)

    const { title, mall, date, time, img } = route.params;

const nav=useNavigation()

    return (
        <SafeAreaView style={{
            flex: 1, paddingHorizontal: 10,
            backgroundColor: "white"
        }} >
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                height: responsiveHeight(6),

                borderBottomColor: "#E3E3E3",
                borderBottomWidth: 2,
                paddingHorizontal: 13,
                justifyContent: "space-between"
            }}  >
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <AntDesign onPress={() => {
                        nav.goBack()
                    }} name="left" size={27} color="red" />
                    <Text style={{ color: "black", fontWeight: "700", fontSize: 19 }}  >My Ticket</Text>
                </View>
            </View>

            <View style={{
                flexDirection: "row", gap: 10,
                borderRadius: 10, borderWidth: 1,
                borderColor: "#E3E3E3", marginTop: 20
            }}>
                <Image style={{ height: 150, width: 130, borderRadius: 20, resizeMode: "contain" }}
                    source={{ uri: img}} />
                <View style={{ gap: 7 }}>
                    <Text style={{ fontWeight: "700", color: "black", fontSize: 16 }} >{title}</Text>
                    <Text style={{ fontWeight: "500", color: "grey", fontSize: 14 }} >{mall}, {data}</Text>
                    <Text style={{ fontWeight: "500", color: "grey", fontSize: 14 }} >{date}th Date,{time}</Text>
                    <Text style={{ fontWeight: "700", color: "black", fontSize: 17 }} >
                    {seatsArray.length > 0 ? seatsArray.join(', ') : 'No seats selected'}
                    </Text>


                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <AntDesign name="barcode" size={30} color="black" />
                        <Text style={{ fontWeight: "700", color: "black", fontSize: 16 }} >{seatsArray}  AYAAN</Text>
                    </View>
                </View>

            </View>

            <View  style={{flex:0.95 , justifyContent:"flex-end"}}>
                <TouchableOpacity  
                
                onPress={() => {
                    nav.navigate("Home");
                    setSeatsArray([])
                }}

                style={{
                    height: 50,
                    backgroundColor: "red",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Text style={{ color: "white", fontSize: 17, fontWeight: "800" }} >Continue To Home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default MyTicket