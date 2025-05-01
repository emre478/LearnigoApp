import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

const ChangePasswordScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Learnigo</Text>

      <View style={styles.inputSection}>
        <Text style={styles.loginTitle}>Change Password</Text>

        <TextInput
          placeholder="New Password"
          style={styles.input}
          placeholderTextColor="#6c757d"
          
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="New Password Again"
            secureTextEntry={!passwordVisible}
            style={styles.passwordInput}
            placeholderTextColor="#6c757d"
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.toggleButton}>
            <Text>{passwordVisible ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signUpButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signUpButtonText}>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
