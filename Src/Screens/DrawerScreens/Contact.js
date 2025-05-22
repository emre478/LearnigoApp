import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const Contact = () => {
  const [contactData, setcontactData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://10.0.2.2:7062/api/Contacts')
      .then(response => response.json())
      .then(data => {
        setContactData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Veri çekme hatası:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#007bff" style={{marginTop: 40}} />
    );
  }

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.heading}>{item.title}</Text>
      <Text style={styles.subheading}>{item.content}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.fullScreenBackground}>
      <FlatList
        data={contactData}
        keyExtractor={item => item.ContactId.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <>
            <Text style={styles.sectionTitle}>Popular Online Courses</Text>
            <Text style={styles.mainTitle}>
              The New Way To Learn Properly in With Us!
            </Text>
          </>
        }
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenBackground: {
    flex: 1,
    backgroundColor: '#e6f0ff'
  },
  container: {
    backgroundColor: '#e6f0ff',
    padding: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    top: 10,
    color: '#007bff',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },
  mainTitle: {
    top: 10,
    color: '#003366',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  subheading: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginTop: 8,
  },
});

export default Contact;
