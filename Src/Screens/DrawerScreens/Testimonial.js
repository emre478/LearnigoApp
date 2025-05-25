import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('http://10.0.2.2:7062/api/Testimonials') // API adresini kendi ortamınıza göre ayarlayın
      .then(res => res.json())
      .then(data => {
        setTestimonials(data);
      })
      .catch(err => {
        console.error('Referanslar alınamadı:', err);
      });
  }, []);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) {
    return null; // veya yükleniyor gösterebilirsin
  }

  const current = testimonials[currentIndex];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goPrev} style={styles.arrowLeft}>
        <Image source={require('../../Assets/icon/arrow.png')} style={styles.arrowIcon} />
      </TouchableOpacity>

      <View style={styles.content}>
        <Image source={{ uri: current.imageUrl }} style={styles.image} />
        <Text style={styles.name}>{current.name}</Text>
        <View style={styles.starsRow}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon key={i} name="star" size={20} color="#fbc02d" />
          ))}
        </View>
        <Text style={styles.company}>{current.company} - {current.position}</Text>
      </View>

      <TouchableOpacity onPress={goNext} style={styles.arrowRight}>
        <Image source={require('../../Assets/icon/right-arrow.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    top: 20,
    marginTop: 20,
    backgroundColor: '#283593',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 40,
    justifyContent: 'center',
    position: 'relative', // okların pozisyonu için gerekli
  },
  arrowLeft: {
    position: 'absolute',
    left: 5,       // biraz daha kenara alabiliriz
    top: 150,    // dikey ortalama
    transform: [{ translateY: -15 }], // yukarı kaydırarak tam ortala (icon yüksekliğinin yarısı kadar)
    zIndex: 10,
  },
  arrowRight: {
    position: 'absolute',
    right: 5,
    top: 150,
    transform: [{ translateY: -15 }],
    zIndex: 10,
  },
  arrowIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  content: {
    width: width * 0.6,
    backgroundColor: '#3949ab',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  name: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  starsRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  company: {
    color: 'white',
    fontSize: 14,
  },
});
export default Testimonials;