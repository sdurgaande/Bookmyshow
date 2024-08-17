import React, { useEffect, useState } from 'react'
import { Text, View, PermissionsAndroid, Modal, TextInput, ScrollView, FlatList, Image } from 'react-native'
import AppWrapper from '../../components/AppWrapper'
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomButton from '../../components/button'
import { responsiveWidth } from 'react-native-responsive-dimensions';
import HomeTitle from '../../components/HomeTitle'

import ProductList from '../../components/productList'
import {products} from '../../mockdata/Groceries'
import {Categories} from '../../mockdata/Groceries'
import GridCategories from '../../components/gridCategories'

export default function HomeScreen() {

  // const [userLocation, setUserlocation] = useState([]);
  // const [address, setaddress] = useState('')
  const [isLocationModal, setisLocationModel] = useState(false)
  useEffect(() => {
    requestLocationPermission()
  }, [])

  const requestLocationPermission = async () => {


    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool zepto App Location Permission',
          message:
            'Cool Photo App needs access to your Location ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setisLocationModel(false)
        getCurrentLocation();
      } else {
        setisLocationModel(true)
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = () => {

    //
    // Geolocation.getCurrentPosition(
    //   async (position) => {
    //     if (position) {
    //   setisLocationModel(false)
    //       setUserlocation({

    //         latitude: position.coords?.latitude,
    //         longitude: position.coords?.longitude,

    //       });
    //       const response = await axios.get(''`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${apiKey}`,

    //       console.log(response.data)
    // setAddress(data.results[0].formatted_address)
    //       );
    //     }
    //     (error) => {
    //    setisLocationModel(true)
    //       // See error code charts below.
    //       console.log(error.code, error.message);
    //     },
    //       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    //   });

  }

  return (
    <AppWrapper>
      <AppHeader isLocationModal={isLocationModal} />
      {/* above Appheader  write address={address} */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
        <AppBody />
      </ScrollView>

      {/* <AppFooter /> */}
      {/* above footer isLocationModal={locationmodal}  onPress={requestLocationPermission} */}
    </AppWrapper>
  )
}


const AppHeader = () => {

  return (
    <View style={{
       padding: 5, gap: 5,
      backgroundColor: "white"
    }} >
      <View style={{
        //  backgroundColor: "#E3E3E3",
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: "space-between"
      }} >
        <AntDesign name="user" size={40} />

        <View style={{ flex: 0.8 }}>
          <Text style={{ textAlign: "center", fontSize: 18, fontWeight: 800, color: "black" }}>Delivery in 10 min</Text>
          <Text numberOfLines={1} style={{ fontSize: 15, fontWeight: 600, color: "grey" }} >{`Home write address here ofter compleated issues -  `}</Text>
          {/* above ofter home write address  check time 1:39*/}

        </View>

        <AntDesign name="book" size={40} />
      </View>
      {/* search box */}

      <View style={{
        borderWidth: 1.5,
        flexDirection: "row",
        alignItems: "center",
        borderColor: 'black',
        borderRadius: 10,
        marginHorizontal: 15,

      }}>
        <AntDesign name="search1" size={25} />
        <TextInput placeholder='Search' style={{
          padding: 12, flex: 1

        }} />
      </View>
    </View>
  )
}

const AppBody = () => {

  const banners = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZsg-R3aqc_1-GTzXL3rkXnxrYJk0-LDSA6Q&s',
    "https://d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/sites/3/2023/04/19151115/Banner_What_is_Zepto.jpg",
    "https://www.brucira.com/assets/img/work/zepto/zepto-banner.webp"
  ];
  const renderBanners = ({ item, index }) => {
    return (
      <Image resizeMode='containe' source={{ uri: item }} style={{
        height: 180,
        width: responsiveWidth(90), borderRadius: 10,
        backgroundColor: "white", alignItems: "center"
      }} />
    )
  }


  return (
    <View style={{ flex: 1, marginTop: 10, paddingHorizontal: 15 }}>
      <View>
        <FlatList pagingEnabled
          horizontal
          data={banners}
          renderItem={renderBanners}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        // ItemSeparatorComponent={() => <View
        // style={{ width: 20 }} ></View>}
        />
      </View>
      <HomeTitle title={"your  Go-to items"} subtitle={"See All"} />
      <ProductList data={products} />
      <HomeTitle title={"Explore By Categories"} subtitle={"See All"} />
      {/* <GridCategories data={ListOfItems} /> */}
      <GridCategories data={Categories} />
    </View>
  )

};

// remember: below code close ofter continew button

// const AppFooter = ({ onPress }) => {
//   // in above ofter onPress write locationmodel

//   return (
//     <Modal
//       visible={true} //setlocationmodal
//       animationType="slide"
//       transparent={true}
//       onRequestClose={() => {
//         console.log("model has been closed")
//       }}
//     >
//       <View style={{ flex: 1, justifyContent: 'flex-end' }}>
//         <View style={{
//           flex: 0.6,
//           height: 200,
//           backgroundColor: 'white',
//           borderTopLeftRadius: 30,
//           borderTopRightRadius: 30,
//           paddingHorizontal: 15,
//           paddingVertical: 15,
//           gap: 10

//         }}>

//           <View style={{ alignItems: 'center' }}><AntDesign name="enviroment" size={100} color={'black'} /></View>

//           <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: 600, color: "black", textAlign: "center" }} >
//             {`Location Permission is OFF `}</Text>
//           <Text numberOfLines={1} style={{
//             fontSize: 15, color: "black",
//             textAlign: "center", top: -5, marginBottom: 10
//           }} >
//             {`Pleas enable location for better delivery expeariance  `}</Text>
//           <CustomButton title="Continue" onPress={onPress} />

//         </View>
//       </View>

//     </Modal>
//   )
// }