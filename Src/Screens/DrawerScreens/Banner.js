import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 👈 EKLE

const BASE_URL = 'http://10.0.2.2:7062';

const Banner = () => {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation(); // 👈 EKLE

  useEffect(() => {
    fetch(`${BASE_URL}/api/Banners`)
      .then(res => res.json())
      .then(data => {
        setBanner(data[0]);
        setLoading(false);
      })
      .catch(err => {
        console.error('Banner verisi alınamadı:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#003366" style={{ marginTop: 20 }} />;

  if (!banner) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Popüler Çevrimiçi Kurslar</Text>
      <Text style={styles.title}>{banner.title}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Courses')}>
        <Text style={styles.buttonText}>Hemen Başla</Text>
      </TouchableOpacity>
      <Image source={{ uri:banner.imageUrl }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9dc6ff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: {
    color: '#0b1660',
    marginBottom: 10,
  },
  title: {
    color: '#0b1660',
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0b1660',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginBottom: 20,
    width: 130,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
  },
});

export default Banner;
