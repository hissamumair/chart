import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Setting = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings Screen</Text>
      <View style={styles.buttonContainer}>
        <Button title="Profile" onPress={() => navigation.navigate('Profile')} color="#007bff" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Notification Settings" onPress={() => navigation.navigate('Notification')} color="#28a745" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Language Preferences" onPress={() => navigation.navigate('Language')} color="#dc3545" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20, // Add padding to the container
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    marginBottom: 20, // Add margin between buttons
  },
});

export default Setting;
