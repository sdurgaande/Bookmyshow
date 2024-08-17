import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = ({ placeholder, onChangeText, value, onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
      <Button title="Search" onPress={onSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'tomato',
    borderRadius: 10,
    padding: 5,
    margin:10

  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 17,
    color:"white",
    fontWeight:"bold"
  },
});

export default SearchBar;
