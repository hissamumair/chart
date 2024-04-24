import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ExpeditionPackagesScreen = () => {
  const expeditionPackages = [
    {
      id: '1',
      name: 'K2 Base Camp Trek',
      location: 'Gilgit-Baltistan',
      duration: '18 days',
      price: '$2500',
      color: '#FF9800', // Orange accent color
    },
    {
      id: '2',
      name: 'Deosai Plains Jeep Safari',
      location: 'Gilgit-Baltistan',
      duration: '7 days',
      price: '$1800',
      color: '#4CAF50', // Green accent color
    },
    {
      id: '3',
      name: 'Hunza Valley Cultural Tour',
      location: 'Gilgit-Baltistan',
      duration: '10 days',
      price: '$1500',
      color: '#3F51B5', // Blue accent color
    },
    {
      id: '4',
      name: 'Fairy Meadows & Nanga Parbat Trek',
      location: 'Gilgit-Baltistan',
      duration: '12 days',
      price: '$2000',
      color: '#FFEB3B', // Yellow accent color
    },
    {
      id: '5',
      name: 'Hopper Glacier Trek',
      location: 'Gilgit-Baltistan',
      duration: '5 days',
      price: '$1200',
      color: '#E91E63', // Pink accent color
    },
    {
      id: '6',
      name: 'Skardu & Shangri-La Trek',
      location: 'Gilgit-Baltistan',
      duration: '15 days',
      price: '$2200',
      color: '#9C27B0', // Violet accent color
    },
    {
      id: '7',
      name: 'Baltoro Glacier Trek',
      location: 'Gilgit-Baltistan',
      duration: '21 days',
      price: '$3500',
      color: '#2196F3', // Light blue accent color
    },
    {
      id: '8',
      name: 'Hispar Valley Trek',
      location: 'Gilgit-Baltistan',
      duration: '14 days',
      price: '$2800',
      color: '#009688', // Teal accent color
    },
    {
      id: '9',
      name: 'Wilcox Pass Trek',
      location: 'Gilgit-Baltistan',
      duration: '9 days',
      price: '$1900',
      color: '#F44336', // Red accent color
    },
    {
      id: '10',
      name: 'Snow Lake Trek',
      location: 'Gilgit-Baltistan',
      duration: '8 days',
      price: '$1600',
      color: '#FFEB3B', // Yellow accent color (can be changed)
    },
    // Add more packages as needed
  ];

  const renderExpeditionPackageItem = ({ item }) => (
    <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.color }]}>
      <Text style={styles.packageName}>{item.name}</Text>
      <Text style={styles.details}>Location: {item.location}</Text>
      <Text style={styles.details}>Duration: {item.duration}</Text>
      <Text style={styles.details}>Price: {item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Expedition Packages in Gilgit-Baltistan</Text>
      <FlatList
        data={expeditionPackages}
        renderItem={renderExpeditionPackageItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
backgroundColor:"yellow"  },
  itemContainer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
  },
  packageName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  details: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default ExpeditionPackagesScreen;
