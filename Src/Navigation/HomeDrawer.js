import React from 'react';
import { Alert } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { HomeScreen } from '../Screens/homePage';
import About from '../Screens/DrawerScreens/About'; 
import Courses from '../Screens/DrawerScreens/Courses';
import Instructors from '../Screens/DrawerScreens/Instructors';
import Blog from '../Screens/DrawerScreens/Blog';
import Contact from '../Screens/DrawerScreens/Contact';
import Chatbot from '../Screens/DrawerScreens/Chatbot';
import BlogDetail from '../Screens/DrawerScreens/BlogDetail';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const { navigation } = props;

  const handleLogout = () => {
  Alert.alert(
    'Çıkış Yap',
    'Çıkış yapmak istediğinizden emin misiniz?',
    [
      { text: 'İptal', style: 'cancel' },
      { 
        text: 'Evet', 
        onPress: () => {
          // Örneğin AsyncStorage temizleme burada yapılabilir

          // Replace ile Login ekranına git
          navigation.replace('Login');
        } 
      },
    ],
    { cancelable: false }
  );
};


  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
        label="Çıkış Yap" 
        onPress={handleLogout} 
        inactiveTintColor="red"
      />
    </DrawerContentScrollView>
  );
}

export default function HomeDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Ana Sayfa" component={HomeScreen} />
      <Drawer.Screen name="Hakkımızda" component={About} />
      <Drawer.Screen name="Kurslar" component={Courses} />
      <Drawer.Screen name="Eğitmenler" component={Instructors} />
      <Drawer.Screen name="Chatbot" component={Chatbot} />
      <Drawer.Screen name="Bloglar" component={Blog} />
      <Drawer.Screen name="İletişim" component={Contact} />
      <Drawer.Screen name="BlogDetail" component={BlogDetail} options={{ drawerItemStyle: { height: 0 } }} />
    </Drawer.Navigator>
  );
}
