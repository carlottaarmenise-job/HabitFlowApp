import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const FeedbackScreen = () => {
  
  const [feedback, setFeedback] = useState('');

  const handleSend = () => {
    if (feedback.trim()) {
      Alert.alert('Grazie!', 'Il tuo feedback è stato inviato.');
      setFeedback('');
    } else {
      Alert.alert('Errore', 'Inserisci un feedback prima di inviare.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✉️ Feedback</Text>
      <TextInput
        style={styles.input}
        placeholder="Scrivi il tuo feedback..."
        multiline
        value={feedback}
        onChangeText={setFeedback}
      />
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Invia</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 6,
  },
   button: {
    marginTop: 32,
    backgroundColor: '#4caf50',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default FeedbackScreen;
