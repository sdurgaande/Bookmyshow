import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from './searchbar'; 

export  const PostalDetails = () => {
  const [searchText, setSearchText] = useState('');
  const [pincodeData, setPincodeData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (searchText.length > 6) {
      setError('Pincode must be 6 digits .');
      setPincodeData(null); 
      return;
    }
    setError(''); 
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${searchText}`);
      const data = await response.json();
      setPincodeData(data[0]?.PostOffice);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <SearchBar
          placeholder="Enter Pincode..."
          onChangeText={setSearchText}
          value={searchText}
          onSearch={handleSearch} 
        />
       
        {error ? <Text style={styles.error}>{error}</Text> : null}

        {pincodeData ? (
          <View>
            {pincodeData.map((office, index) => (
              <View key={index} style={styles.officeContainer}>
                <Text style={styles.label}>{index + 1}. Area:  <Text style={styles.text}>{office.Name}</Text></Text>
                <Text style={styles.label}>District:<Text style={styles.text}>{office.District}</Text></Text>
                <Text style={styles.label}>Region:<Text style={styles.text}>{office.Region}</Text></Text>
                <Text style={styles.label}>Division:<Text style={styles.text}>{office.Division}</Text></Text>
                <Text style={styles.label}>State:<Text style={styles.text}>{office.State}</Text></Text>
                <Text style={styles.label}>Pincode:<Text style={styles.text}>{office.Pincode}</Text></Text>
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.error}>No data available.</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  officeContainer: {
    borderWidth: 0.5,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    color:'crimson',
    fontSize:20
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text:{
    color:"black",
    fontSize:20,
    fontWeight:"600" 
  }
});

export default PostalDetails;
