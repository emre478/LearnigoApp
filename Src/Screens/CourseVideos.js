import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';
import {useRoute} from '@react-navigation/native';

const CourseVideos = () => {
  const {courseId} = useRoute().params;
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://10.0.2.2:7062/api/CourseVideos')
      .then(res => res.json())
      .then(data => {
        console.log('Gelen API verisi:', data);
        const allVideos = data;
        console.log('Tüm videolar:', allVideos);
        console.log('Route ile gelen courseId:', courseId);
        const filtered = allVideos.filter(
          video => String(video.courseId) === String(courseId),
        );
        console.log('Filtrelenmiş videolar:', filtered);
        setVideos(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error('Video verisi alınamadı:', err);
        setLoading(false);
      });
  }, [courseId]);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#003366" style={{marginTop: 40}} />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📺 Kurs Videoları</Text>

      {videos.length === 0 ? (
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16}}>
          Bu kursa ait video bulunamadı.
        </Text>
      ) : (
        <FlatList
          data={videos}
          keyExtractor={item => item.courseVideoId.toString()}
          renderItem={({item}) => (
            <View style={styles.videoBox}>
              <Text style={styles.videoTitle}>
                🎬 Video #{item.videoNumber}
              </Text>
              <WebView
                source={{uri: item.videoUrl}}
                style={styles.webview}
                javaScriptEnabled={true}
                domStorageEnabled={true}
              />
              <Text style={styles.videoDesc}>
                Bu videoda React Native eğitiminin {item.videoNumber}. konusu
                anlatılmaktadır.
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 15,
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 12,
  },
  videoBox: {
    marginBottom: 32,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#003366',
  },
  webview: {
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
  },
  videoDesc: {
    marginTop: 12,
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});

export default CourseVideos;
