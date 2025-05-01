import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Drawer = createDrawerNavigator();

export const HomeScreen = ({navigation}) => {
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
          source={{uri: 'https://i.ibb.co/7kJbg6X/teacher.png'}}
          style={styles.bannerImage}
        />
      </View>
    </View>
  );
};



const AboutScreen = ({route}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{route.name} Page</Text>
  </View>
);

const CoursesScreen = ({route}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{route.name} Page</Text>
  </View>
);

const InstructorsScreen = ({route}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{route.name} Page</Text>
  </View>
);

const BlogScreen = ({route}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{route.name} Page</Text>
  </View>
);

const ContactScreen = ({route}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{route.name} Page</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Courses" component={CoursesScreen} />
        <Drawer.Screen name="Instructors" component={InstructorsScreen} />
        <Drawer.Screen name="Blog" component={BlogScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

