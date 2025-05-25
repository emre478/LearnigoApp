import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const BlogDetail = ({ route }) => {
  const { blog } = route.params;
  const blogDate = new Date(blog.blogDate).toLocaleDateString('tr-TR');

  return (
    <View style={styles.fullScreenBackground}>
      {/* Başlık bölümü buraya alındı */}
      <View style={styles.headerRow}>
        <Image
          source={require('../../Assets/icon/book.png')}
          style={styles.icon}
        />
        <Text style={styles.mainTitle}>Learnigo</Text>
      </View>

      <ScrollView>
        <View style={styles.card}>
          {/* Görsel */}
          <Image source={{ uri: blog.imageUrl }} style={styles.coverImage} />

          {/* Başlık */}
          <Text style={styles.title}>{blog.title}</Text>

          {/* Kategori + Tarih */}
          <View style={styles.meta}>
            <Text style={styles.category}>📁 {blog.blogCategory?.name}</Text>
            <Text style={styles.date}>🗓️ {blogDate}</Text>
          </View>

          {/* Yazar */}
          <Text style={styles.author}>✍️ {blog.writer?.firstName} {blog.writer?.lastName}</Text>

          {/* İçerik */}
          <Text style={styles.content}>{blog.content}</Text>
        </View>
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  coverImage: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 12,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#333',
  },
  author: {
    fontSize: 15,
    color: '#007bff',
    fontWeight: '600',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginLeft: 10,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default BlogDetail;
