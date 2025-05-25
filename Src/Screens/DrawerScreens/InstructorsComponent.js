import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const InstructorsComponent = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://10.0.2.2:7062/api/Users/TeacherList')
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
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
        <Text style={styles.role}>Eğitmen</Text>
      </View>
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#fff" style={{ marginTop: 40 }} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Eğitmenlerimiz</Text>
      <Text style={styles.mainTitle}>Alanında Uzman Eğitim Kadromuz</Text>
      <FlatList
        data={instructors}
        renderItem={renderItem}
        keyExtractor={item => item.writerId ? item.writerId.toString() : item.firstName + item.lastName}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#283593',
    paddingVertical: 20,
    top: 20,
    borderRadius: 12,
  },
  sectionTitle: {
    color: '#64b5f6',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 6,
    fontWeight: '600',
  },
  mainTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  card: {
    backgroundColor: 'white',
    width: width * 0.35,
    marginHorizontal: 8,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: width * 0.35,
    resizeMode: 'cover',
  },
  infoContainer: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#212121',
  },
  role: {
    fontSize: 14,
    color: '#757575',
    marginTop: 4,
  },
});

export default InstructorsComponent;
