import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingSpinner = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
    loading: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default LoadingSpinner;
