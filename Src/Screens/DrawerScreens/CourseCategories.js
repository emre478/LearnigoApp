import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,  
  Image,
} from 'react-native';

const CourseCategories = ({navigation}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://10.0.2.2:7062/api/CourseCategories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);

  const renderItem = ({item}) => {
    // Kategori adına göre ikon seç
    let iconSource;
    if (item.name === 'Yazılım Geliştirme') {
      iconSource = require('../../Assets/icon/code.png');
    } else if (item.name === 'Fotoğrafçılık') {
      iconSource = require('../../Assets/icon/picture.png');
    } 

    return (
      <TouchableOpacity style={styles.card}>
        <View style={styles.iconWrapper}>
          <Image source={iconSource} style={styles.icon} />
        </View>
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.categoryDescription}>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.smallTitle}>Kurs Kategorilerimiz</Text>
      <Text style={styles.mainTitle}>Popüler Kategorilere Göz Atın</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.courseCategoryId.toString()}
        renderItem={renderItem}
        contentContainerStyle={{paddingVertical: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  smallTitle: {
    fontSize: 14,
    color: '#2e3192',
    marginBottom: 6,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#090c28',
    marginBottom: 16,
  },
  card: {
    width: 230,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    marginRight: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 4},
    elevation: 3,
  },
  iconWrapper: {
    marginBottom: 15,
  },
  icon: {
    height: 40,
    width: 40,
  },
  categoryName: {
    fontWeight: '700',
    fontSize: 18,
    color: '#2e3192',
    marginBottom: 10,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  linkText: {
    fontSize: 14,
    color: '#2e3192',
    fontWeight: '600',
  },
});

export default CourseCategories;
