import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://10.0.2.2:7062/api/Users/TeacherList') // API endpointini kendi projenize göre ayarla
      .then(res => res.json())
      .then(data => {
        setInstructors(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Eğitmen verisi alınamadı:', err);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 40 }} />;
  }

  return (
    <FlatList
      data={instructors}
      keyExtractor={item => item.writerId ? item.writerId.toString() : item.firstName + item.lastName}
      renderItem={renderItem}
      ListHeaderComponent={
        <View style={styles.headerRow}>          
          <Text style={styles.mainTitle}>Eğitmenlerimiz</Text>
          <View style={styles.headerLine} />
        </View>
      }
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    top: 10,
    padding: 20,
    backgroundColor: '#f0f4f8',
    paddingBottom: 60,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    margin: 10,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  image: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width * 0.25,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  mainTitle: {
    top: 15,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
  },
  headerLine: {
    top: 15,
    width: 165,
    height: 3,
    backgroundColor: '#003366',
    marginTop: 4,
    marginBottom: 16,
    borderRadius: 2,
  },
});

export default Instructors;
