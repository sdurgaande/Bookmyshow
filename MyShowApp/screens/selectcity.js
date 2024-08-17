
// ------------------------------------------------------------------


import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { Cities } from '../utils/data';
import { useColor } from '../utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Store } from '../Context/Wrapper';
// import { responsiveFontSize } from 'react-native-responsive-dimensions'
// import { responsiveScreenWidth } from 'react-native-responsive-dimensions'


const SelectCity = () => {
  const [isSelected, setIsSelected] = useState(null); // Initialize with null
  const [isClicked, setIsClicked] = useState(true);
  const { setData } = useContext(Store);
  const nav = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: useColor.white, paddingHorizontal: 20, paddingTop: 30 }}>
      <Text style={{ fontSize: 25, color: useColor.black, fontWeight: 'bold' }}>Select City</Text>
      <FlatList
        style={{ marginTop: 40 }}
        numColumns={3}
        data={Cities}
        keyExtractor={(item, index) => index.toString()} // Ensure unique keys
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              setIsSelected(item); // Set the selected item directly
              setIsClicked(false);
              setData(item);
            }}
            style={{
              borderWidth: isSelected === item ? 2 : 1,
              borderColor: isSelected === item ? useColor.primary : useColor.grey,
              marginLeft: 10,
              marginBottom: 30,
              paddingHorizontal: 5,
              paddingVertical: 9,
              borderRadius: 20,
              marginRight:5
            }}>
            <Text style={{
              fontWeight: '500',
              color: isSelected === item ? useColor.primary : useColor.grey,
              fontSize: 18,
              
            }}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={{ flex: 0.9, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          disabled={isClicked}
          onPress={() => {
            AsyncStorage.setItem("login", "on");
            nav.navigate('Home');
          }}
          style={{
            backgroundColor: !isClicked ? useColor.primary : '#E3E3E3',
            marginHorizontal: 40,
            height: 55,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontWeight: 'bold', color: !isClicked ? 'white' : 'grey' }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectCity;
