import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../Screens/homePage';
import About from '../Screens/DrawerScreens/About'; 
import Courses from '../Screens/DrawerScreens/Courses';
import Instructors from '../Screens/DrawerScreens/Instructors';
import Blog from '../Screens/DrawerScreens/Blog';
import Contact from '../Screens/DrawerScreens/Contact';
import BlogDetail from '../Screens/DrawerScreens/BlogDetail';


const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeMain" component={HomeScreen} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Courses" component={Courses} />
      <Drawer.Screen name="Instructors" component={Instructors} />
      <Drawer.Screen name="Blog" component={Blog} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="BlogDetail" component={BlogDetail} options={{ drawerItemStyle: { height: 0 } }} />
    </Drawer.Navigator>
  );
}

