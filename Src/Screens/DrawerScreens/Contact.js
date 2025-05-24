import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Contact = () => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://10.0.2.2:7062/api/Contacts')
      .then(res => res.json())
      .then(data => {
        setContact(data[0]);
        setLoading(false);
      })
      .catch(err => {
        console.error('İletişim verisi alınamadı:', err);
        setLoading(false);
      });
  }, []);

  const openMap = () => {
    if (contact?.mapUrl) {
      Linking.openURL(contact.mapUrl);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 40 }} />;
  }

  return (
    <View style={styles.fullScreenBackground}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>İletişim Bilgileri</Text>
        </View>

        <View style={styles.card}>
          {/* Harita görseli */}
          <TouchableOpacity onPress={openMap}>
            <Image
              source={require('../../Assets/image/map-preview.jpg')}
              style={styles.mapImage}
            />
            <Text style={styles.mapText}>📍 Haritada Göster</Text>
          </TouchableOpacity>

          {/* Adres */}
          <View style={styles.row}>
            <Icon name="location-outline" size={22} color="#555" />
            <Text style={styles.label}>Adres: </Text>
            <Text style={styles.value}>{contact.address}</Text>
          </View>

          {/* Telefon */}
          <View style={styles.row}>
            <Icon name="call-outline" size={22} color="#555" />
            <Text style={styles.label}>Telefon: </Text>
            <Text style={styles.value}>{contact.phone}</Text>
          </View>

          {/* Email */}
          <View style={styles.row}>
            <Icon name="mail-outline" size={22} color="#555" />
            <Text style={styles.label}>E-Posta: </Text>
            <Text style={styles.value}>{contact.email}</Text>
          </View>
        </View>

        {/* Alt yazı */}
        <Text style={styles.footerText}>
          📬 Bizimle iletişime geçmekten çekinmeyin. En kısa sürede dönüş sağlanacaktır.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenBackground: {
    top: 20,
    flex: 1,
    backgroundColor: '#e6f0ff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 6,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003366',
    marginLeft: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    marginBottom: 30,
  },
  mapImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  mapText: {
    color: '#007bff',
    marginBottom: 20,
    fontSize: 15,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontWeight: '600',
    fontSize: 15,
    marginLeft: 8,
    color: '#333',
  },
  value: {
    fontSize: 15,
    color: '#444',
    marginLeft: 4,
  },
  footerText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default Contact;
