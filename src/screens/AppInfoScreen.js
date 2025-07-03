import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ℹ️ Info App</Text>
      <Text style={styles.infoText}>Nome: HabitFlow</Text>
      <Text style={styles.infoText}>Versione: 1.0.0</Text>
      <Text style={styles.infoText}>Sviluppata da: Carlotta Armenise</Text>
      <Text style={styles.infoText}>© 2025 Tutti i diritti riservati.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  infoText: { fontSize: 16, marginBottom: 8 },
});

export default AppInfoScreen;
