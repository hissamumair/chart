import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const Guide = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Expedition Guide</Text>

        {/* Preparation Section */}
        <TouchableOpacity style={styles.sectionButton}>
          <Text style={styles.sectionButtonText}>Before You Go</Text>
        </TouchableOpacity>
        <View style={[styles.sectionContent, styles.sectionContentPreparation]}>
          <Text style={styles.sectionText}>
            - Make sure you have all the necessary permits and documents.
          </Text>
          <Text style={styles.sectionText}>
            - Check the weather forecast and pack accordingly (dress in layers!).
          </Text>
          <Text style={styles.sectionText}>
            - Familiarize yourself with the route and itinerary provided by your guide.
          </Text>
        </View>

        {/* During the Expedition Section */}
        <TouchableOpacity style={styles.sectionButton}>
          <Text style={styles.sectionButtonText}>During the Expedition</Text>
        </TouchableOpacity>
        <View style={[styles.sectionContent, styles.sectionContentDuring]}>
          <Text style={styles.sectionText}>
            - Stay hydrated and take regular breaks, especially at higher altitudes.
          </Text>
          <Text style={styles.sectionText}>
            - Follow your guide's instructions and stay together as a group for safety.
          </Text>
          <Text style={styles.sectionText}>
            - Respect the local environment and culture. Leave no trace behind.
          </Text>
        </View>

        {/* After the Expedition Section */}
        <TouchableOpacity style={styles.sectionButton}>
          <Text style={styles.sectionButtonText}>After the Expedition</Text>
        </TouchableOpacity>
        <View style={[styles.sectionContent, styles.sectionContentAfter]}>
          <Text style={styles.sectionText}>
            - Reflect on your experience and share your feedback with your guide.
          </Text>
          <Text style={styles.sectionText}>
            - Take care of any equipment you borrowed or rented.
          </Text>
          <Text style={styles.sectionText}>- Consider planning your next adventure!</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light background
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', // Darker text for contrast
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with slight transparency
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  sectionContentPreparation: {
    backgroundColor: '#FFEB3B', // Light yellow for Preparation section
  },
  sectionContentDuring: {
    backgroundColor: '#2196F3', // Light blue for During section
  },
  sectionContentAfter: {
    backgroundColor: '#9C27B0', // Light violet for After section
  },
});

export default Guide;
