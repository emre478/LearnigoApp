import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Banner from '../DrawerScreens/Banner';
import CourseCategories from '../DrawerScreens/CourseCategories';
import InstructorsComponent from '../DrawerScreens/InstructorsComponent';

export const HomeScreen = ({navigation, openDrawer}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 40}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Learnigo</Text>
      </View>

      <Banner />

      <CourseCategories />

      <InstructorsComponent />
    </ScrollView>
  );
};

export default HomeScreen;
