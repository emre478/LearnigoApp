import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Blog = () => {
  const navigation = useNavigation();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://10.0.2.2:7062/api/Blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Blog verisi alınamadı:', err);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('BlogDetail', { blog: item })}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 40 }} />;
  }

  return (
    <FlatList
      data={blogs}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <View style={styles.headerRow}>          
          <Text style={styles.mainTitle}>Bloglar</Text>
          <View style={styles.headerLine} />
        </View>
      }
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f4f8',
    paddingBottom: 60,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  headerLine: {
    top: 15,
    width: 80,
    height: 3,
    backgroundColor: '#003366',
    marginTop: 4,
    marginBottom: 16,
    borderRadius: 2,
  },
  title: {
    padding: 14,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  headerRow: {
    flexDirection: 'column',  
    alignItems: 'flex-start', 
    marginBottom: 24,
  },
  mainTitle: {
    top: 15,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});


export default Blog;
