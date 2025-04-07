import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
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

const DummyScreen = ({ route }) => (
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
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={DummyScreen} />
        <Drawer.Screen name="Courses" component={DummyScreen} />
        <Drawer.Screen name="Instructors" component={DummyScreen} />
        <Drawer.Screen name="Blog" component={DummyScreen} />
        <Drawer.Screen name="Contact" component={DummyScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerText: {
    flex: 1,
  },
  label: {
    color: '#1e88e5',
    fontSize: 14,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0d47a1',
  },
  bannerImage: {
    width: 140,
    height: 140,
    marginLeft: 10,
    borderRadius: 10,
  },
});
