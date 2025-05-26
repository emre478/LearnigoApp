import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

const Courses = ({navigation}) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://10.0.2.2:7062/api/Courses') // API endpoint kendi projenize göre ayarlayın
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Kurs verisi alınamadı:', err);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CourseVideos', { courseId: item.courseId })}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.courseName}</Text>
      <Text style={styles.category}>{item.courseCategory?.name}</Text>
      <Text style={styles.price}>{item.price} ₺</Text>
      <Text style={styles.instructor}>
        Eğitmen: {item.appUser?.firstName} {item.appUser?.lastName}
      </Text>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 40 }} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kurslar</Text>
      <View style={styles.headerLine} />
      <FlatList
        data={courses}
        keyExtractor={item => item.courseId.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  header: {
    top: 15,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
  },
  headerLine: {
    top: 10,
    width: 80,
    height: 3,
    backgroundColor: '#003366',
    marginTop: 4,
    marginBottom: 16,
    borderRadius: 2,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 6,
    color: '#333',
  },
  category: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: '600',
  },
  instructor: {
    marginTop: 8,
    fontSize: 14,
    color: '#444',
  },
});

export default Courses;
