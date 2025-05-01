import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../Screens/homePage';
import LoginScreen from '../Screens/loginPage';
import RegisterScreen from '../Screens/registerPage';
import VerifyCodeScreen from '../Screens/forgotPassowdPage/codePage';
import EmailEntryScreen from '../Screens/forgotPassowdPage/emailPage';
import ChangePasswordScreen from '../Screens/forgotPassowdPage/changePasswordPage';
import HomeDrawer from './HomeDrawer';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
        <Stack.Screen name="Email" component={EmailEntryScreen} />
        <Stack.Screen name="ChangePassowrd" component={ChangePasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
