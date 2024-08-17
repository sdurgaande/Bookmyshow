// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// export default function HomeScreen() {

//   return (
//     <View style={{ flex: 1}}>
//       <MapView style={{ flex: 1,backgroundColor: "grey"}} 
//         showsUserLocation
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       />

//     </View>
//   )
// }


import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const App = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;

