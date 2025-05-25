import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BASE_URL = 'http://10.0.2.2:7062';

const Banner = () => {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

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

  if (loading) return <ActivityIndicator size="large" color="#375a7f" style={{ marginTop: 20 }} />;

  if (!banner) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Popüler Çevrimiçi Kurslar</Text>
      <Text style={styles.title}>{banner.title}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Kurslar')}>
        <Text style={styles.buttonText}>Hemen Başla</Text>
      </TouchableOpacity>
      <Image source={require("../../Assets/image/young-man.jpg")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cde4ff', // Temaya uyumlu, açık mavi ton
    padding: 25,
    borderRadius: 20,
    marginBottom: 30,
    shadowColor: '#3a6ea5', // Hafif mavimsi gölge
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  label: {
    color: '#2e4a7d', // Daha koyu mavi, temaya uyumlu
    fontSize: 14,
    marginBottom: 10,
    fontWeight: '500',
  },
  title: {
    color: '#1a2f55', // Koyu mavi, okunabilir
    fontSize: 36,
    fontWeight: '900',
    marginBottom: 25,
    lineHeight: 42,
  },
  button: {
    backgroundColor: '#1a2f55', // Koyu mavi buton
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 30,
    width: 160,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 250,       // Fotoğraf biraz büyütüldü
    resizeMode: 'cover',
    borderRadius: 20,
    shadowColor: '#1a2f55',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 10,
  },
});

export default Banner;
