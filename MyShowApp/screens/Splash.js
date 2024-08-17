import { View, Text, Image } from 'react-native'
import React,{ useEffect }  from 'react'
import { useColor } from '../utils/colors'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Splash = () => {

  const nav = useNavigation()
  useEffect(() => {
      setTimeout(() => {
          AsyncStorage.getItem("login").then((value) => {
              value != null ? nav.replace("Home") : nav.replace("SelectCity");
          })

      }, 2000)
  }, []);


  return (
    <View style={{ flex: 1, backgroundColor: useColor.primary }}>
      <Image style={{
                width: "100%", height: "100%",
                resizeMode: "contain"
            }}
        source={{ uri: "https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" }} />

    </View>
  )
}

export default Splash