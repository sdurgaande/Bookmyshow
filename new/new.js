// import React from 'react';
// import {  StyleSheet, View } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// export default function MyLocation() {
//     return (
//         <View style={styles.container}>
//             <MapView 
//                 style={styles.map}
//                 initialRegion={{
//                     latitude:16.583873,    
//                     // 16.583873, 81.974615
//                     // latitude: 37.78825,
//                     // longitude: -122.4324,
//                     longitude:81.974615,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                 }}
//                 onRegionChange={data=>console.log(data)}
//             >
//                 <Marker
//                     coordinate={{
//                         latitude: 37.78825,
//                         longitude: -122.4324,
//                     }}
//                     title="Testing"
//                 />
//             </MapView>
//         </View>
//     );
// }

//  const styles=StyleSheet.create({
//     container:{
//         ...StyleSheet.absoluteFillObject,
//         justifyContent:'center',
//         alignItems:"center"
//     },
//     map:{
//         ...StyleSheet.absoluteFillObject,
//     }
//  })
// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// const MyLocation = () => {
//   // Set the initial region to show New York City
//   const initialRegion = {
//     latitude: 40.7128,
//     longitude: -74.0060,
//     latitudeDelta: 0.05,
//     longitudeDelta: 0.05,
//   };

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={initialRegion}
//       >
//         <Marker
//           coordinate={{ latitude: 40.6892, longitude: -74.0445 }} // Statue of Liberty coordinates
//           title={"Statue of Liberty"}
//           description={"An iconic symbol of freedom."}
//         />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
// });

// export default MyLocation;


import React, { useEffect, useState } from 'react';
import { StyleSheet, View, PermissionsAndroid, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MyLocation = () => {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setHasLocationPermission(true);
        } else {
          Alert.alert('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestLocationPermission();
  }, []);

  // Set the initial region to show New York City
  const initialRegion = {
    latitude: 40.7128,
    longitude: -74.0060,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  if (!hasLocationPermission) {
    return null; // Optionally render a loading or permission denied screen
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={{ latitude: 40.6892, longitude: -74.0445 }} // Statue of Liberty coordinates
          title={"Statue of Liberty"}
          description={"An iconic symbol of freedom."}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MyLocation;
