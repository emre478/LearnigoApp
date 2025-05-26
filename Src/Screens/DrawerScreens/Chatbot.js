import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const Chatbot = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question) return;

    setLoading(true);
    try {
      const res = await fetch(`http://10.0.2.2:7062/api/CareerAdvisor/gpt?area=${encodeURIComponent(question)}`);
      const data = await res.text(); // string geliyor!
      setResponse(data);
    } catch (error) {
      setResponse('Bir hata oluştu. API erişilemiyor.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kariyer Chat Bot 🤖</Text>

      <TextInput
        style={styles.input}
        placeholder="Örn: Javascript"
        value={question}
        onChangeText={setQuestion}
      />

      <Button title="Gönder" onPress={askQuestion} color="#003366" />

      {loading ? (
        <Text style={styles.loading}>Cevap yükleniyor...</Text>
      ) : response ? (
        <View style={styles.responseBox}>
          <Text style={styles.label}>💬 Cevap:</Text>
          <Text style={styles.response}>{response}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 22,
    padding: 20,
    backgroundColor: '#F0F4F8',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#003366',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  responseBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  response: {
    fontSize: 16,
    color: '#333',
  },
  loading: {
    marginTop: 10,
    fontStyle: 'italic',
    color: '#666',
  }
});

export default Chatbot;
