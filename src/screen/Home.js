import React from 'react';
import { Dimensions } from 'react-native'; // Not used here, can be removed
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import Chart from './Chart'; // Assuming Chart component is imported

const Home = ({ route }) => {  // Assuming data might be passed through route
  const navigation = useNavigation();

  // Replace with your actual data fetching logic (if data is not static)
  const sampleData = [
    { value: 250, label: 'M' },
    { value: 500, label: 'T', frontColor: '#177AD5' },
    { value: 745, label: 'W', frontColor: '#177AD5' },
    { value: 320, label: 'T' },
    { value: 600, label: 'F', frontColor: '#177AD5' },
    { value: 256, label: 'S' },
    { value: 300, label: 'S' },
  ];

  const data = route.params?.data || sampleData; // Check for data in route params

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuContainer}>
        <Chart data={data} />  {/* Pass data as a prop */}
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon type="material" name="menu" color={'black'} size={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
  },
});

export default Home;
