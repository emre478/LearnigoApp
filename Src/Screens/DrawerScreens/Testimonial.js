import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('http://10.0.2.2:7062/api/Testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(err => console.error('Referanslar alınamadı:', err));
  }, []);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) {
    return null; // Veya yükleniyor gösterebilirsiniz
  }

  const current = testimonials[currentIndex];

  return (
    <View style={styles.wrapper}>
      {/* Başlık */}
      <Text style={styles.headerTitle}>Referanslarımız</Text>

      <View style={styles.container}>
        <TouchableOpacity onPress={goPrev} style={styles.arrowLeft}>
          <Image source={require("../../Assets/icon/arrow.png")} style={styles.icon} />
        </TouchableOpacity>

        <View style={styles.content}>
          <Image source={{ uri: current.imageUrl }} style={styles.image} />
          <Text style={styles.name}>{current.name}</Text>
          {/* Yıldızlar kaldırıldı */}
          <Text style={styles.company}>{current.company} - {current.position}</Text>
          <Text style={styles.comment}>{current.comment}</Text>
        </View>

        <TouchableOpacity onPress={goNext} style={styles.arrowRight}>
          <Image source={require("../../Assets/icon/right-arrow.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#283593',
    marginBottom: 24,
  },
  container: {
    backgroundColor: '#3949ab',
    borderRadius: 16,
    paddingVertical: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.85,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  arrowLeft: {
    position: 'absolute',
    left: 8,
    zIndex: 10,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderRadius: 20,
  },
  arrowRight: {
    position: 'absolute',
    right: 8,
    zIndex: 10,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderRadius: 20,
  },
  content: {
    width: width * 0.65,
    backgroundColor: '#283593',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  name: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  company: {
    color: 'white',
    fontSize: 16,
    fontStyle: 'italic',
  },
  comment: {
    color: 'white',
    fontSize: 16,
    fontStyle: 'normal',
    marginTop: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
});

export default Testimonials;
