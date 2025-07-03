import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const quotes = [
  "La motivazione ti porta avanti un giorno, l’abitudine ti porta avanti tutti i giorni.",
  "Non aspettare. Il tempo non sarà mai giusto.",
  "Le piccole abitudini costruiscono grandi risultati.",
];

const InspirationScreen = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const next = () => setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💡 Ispirazione</Text>
      <Text style={styles.quote}>{quote}</Text>
      <TouchableOpacity style={styles.button} onPress={next}>
        <Text style={styles.buttonText}>Nuova citazione</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
  quote: { fontSize: 16, fontStyle: 'italic', marginBottom: 24, textAlign: 'center' },
  button: { backgroundColor: '#4caf50', alignSelf: 'center', padding: 12, borderRadius: 6 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default InspirationScreen;
