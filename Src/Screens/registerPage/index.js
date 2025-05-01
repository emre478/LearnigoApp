import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './styles';

const RegisterScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learnigo</Text>

      <View style={styles.inputSection}>
        <Text style={styles.registerTitle}>Register</Text>

        <TextInput
          placeholder="Full Name"
          style={styles.input}
          placeholderTextColor="#6c757d"
        />

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

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={!confirmPasswordVisible}
            style={styles.passwordInput}
            placeholderTextColor="#6c757d"
          />
          <TouchableOpacity
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            style={styles.toggleButton}
          >
            <Text>{confirmPasswordVisible ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.bottomTextContainer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



export default RegisterScreen;
