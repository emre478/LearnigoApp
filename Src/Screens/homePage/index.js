import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'; 


export const HomeScreen = ({ navigation, openDrawer }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Learnigo</Text>
      </View>

      
      <View style={styles.banner}>
        <View style={styles.bannerText}>
          <Text style={styles.label}>Popular Online Courses</Text>
          <Text style={styles.title}>
            The New Way To Learn Properly in With Us!
          </Text>
        </View>
        <Image
          source={{ uri: 'https://i.ibb.co/7kJbg6X/teacher.png' }}
          style={styles.bannerImage}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
