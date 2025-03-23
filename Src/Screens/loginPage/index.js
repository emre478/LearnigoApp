import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,  Image } from 'react-native';
import styles from './styles';

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Learnigo</Text>

      <View style={styles.inputSection}>
        <Text style={styles.loginTitle}>Login</Text>

        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#6c757d"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            style={styles.passwordInput}
            placeholderTextColor="#6c757d"
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.toggleButton}
          >
            <Text>{passwordVisible ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.orLogin}>Or login with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../Assets/icon/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../Assets/icon/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../Assets/icon/apple.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomTextContainer}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



export default LoginScreen;
