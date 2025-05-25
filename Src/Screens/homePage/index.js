import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Banner from '../DrawerScreens/Banner';
import CourseCategories from '../DrawerScreens/CourseCategories';
import InstructorsComponent from '../DrawerScreens/InstructorsComponent';
import Testimonials from '../DrawerScreens/Testimonial';

export const HomeScreen = ({navigation, openDrawer}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 40}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={require("../../Assets/icon/menu.png")} style = {styles.icon1} />
        </TouchableOpacity>
       <View style={styles.headerRow}>
                  <Image
                    source={require('../../Assets/icon/book.png')}
                    style={styles.icon}
                  />
                  <Text style={styles.mainTitle}>Learnigo</Text>
                </View>
      </View>

      <Banner />

      <CourseCategories />

      <InstructorsComponent />

      <Testimonials />
    </ScrollView>
  );
};

export default HomeScreen;
