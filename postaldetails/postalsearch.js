import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from './searchbar'; 
import LoadingSpinner from './loadingspinner';

export const PostalDetailsSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [pincodeData, setPincodeData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (searchText.trim().length === 0) {
      setError('Please enter a pincode or village name.');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      let apiUrl = '';
      if (searchText.length > 6) {
       
        apiUrl = `https://api.postalpincode.in/postoffice/${searchText}`;
      } else {
       
        apiUrl = `https://api.postalpincode.in/pincode/${searchText}`;
      }

      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (data && data[0]?.PostOffice) {
        setPincodeData(data[0].PostOffice);
        setSearchText('');
      } else {
        throw new Error('No data found for the given pincode or village name.');
      }
    } catch (error) {
      setError(error.message);
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white' }}>
        <SearchBar
          placeholder="Enter Pincode or Village Name..."
          onChangeText={text => setSearchText(text)}
          value={searchText}
          onSearch={handleSearch}
        />

        {isLoading && <LoadingSpinner />}

        {error ? <Text style={styles.error}>{error}</Text> : null}

        {pincodeData ? (
          <View>
            {pincodeData.map((office, index) => (
              <View key={index} style={styles.officeContainer}>
                <Text style={styles.label}>{index + 1}. Area: <Text style={styles.text}>{office.Name}</Text></Text>
                <Text style={styles.label}>District: <Text style={styles.text}>{office.District}</Text></Text>
                <Text style={styles.label}>Region: <Text style={styles.text}>{office.Region}</Text></Text>
                <Text style={styles.label}>Division: <Text style={styles.text}>{office.Division}</Text></Text>
                <Text style={styles.label}>State: <Text style={styles.text}>{office.State}</Text></Text>
                <Text style={styles.label}>Pincode: <Text style={styles.text}>{office.Pincode}</Text></Text>
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
    borderColor: 'black',
    padding: 15,
    margin: 5,
  },
  label: {
    fontWeight: 'bold',
    color: 'crimson',
    fontSize: 20,
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default PostalDetailsSearch;
