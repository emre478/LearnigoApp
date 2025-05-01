import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function EmailEntryScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Learnigo</Text>

      <Text style={styles.title}>Enter Your Email</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VerifyCode')}>
        <Text style={styles.buttonText}>Send Verification Code</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        Already have an account?{' '}
        <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fd',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1c1c1e',
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginBottom: 20,
    color: '#1c1c1e',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  bottomText: {
    marginTop: 20,
    color: '#333',
  },
  linkText: {
    color: '#007bff',
    fontWeight: '500',
  },
});
