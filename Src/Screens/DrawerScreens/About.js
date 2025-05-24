import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const {width} = Dimensions.get('window');

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://10.0.2.2:7062/api/Abouts')
      .then(response => response.json())
      .then(data => {
        setAboutData(data);
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
      <Image source={{uri: item.imageUrl1}} style={styles.image} />
      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.bulletGroup}>
        <Text style={styles.bullet}>✅ {item.item1}</Text>
        <Text style={styles.bullet}>📘 {item.item2}</Text>
        <Text style={styles.bullet}>📜 {item.item3}</Text>
        <Text style={styles.bullet}>🧠 {item.item4}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.fullScreenBackground}>
      <FlatList
        data={aboutData}
        keyExtractor={item => item.aboutId.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.headerRow}>
            <Image
              source={require('../../Assets/icon/book.png')}
              style={styles.icon}
            />
            <Text style={styles.mainTitle}>Learnigo</Text>
          </View>
        }
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenBackground: {
    flex: 1,
    backgroundColor: '#e6f0ff',
  },
  container: {
    top: 20,
    padding: 24,
    paddingBottom: 60,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginLeft: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 3},
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
    borderRadius: 12,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
    marginBottom: 12,
  },
  bulletGroup: {
    marginTop: 10,
  },
  bullet: {
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
  },
});

export default About;
