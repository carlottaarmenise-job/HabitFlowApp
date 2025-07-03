import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';
import { useHabits } from '../context/HabitContext';

const ExportScreen = () => {
  const { habits } = useHabits();

  const exportCSV = async () => {
    const header = "Emoji,Nome,Date Completate\n";
    const rows = habits.map(h => `${h.emoji},${h.name},"${(h.datesCompleted || []).join(' ')}"`).join('\n');
    const csv = header + rows;

    await Share.share({ message: csv, title: 'Esporta abitudini' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📤 Esporta Dati</Text>
      <TouchableOpacity style={styles.button} onPress={exportCSV}>
        <Text style={styles.buttonText}>Esporta in CSV / Condividi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
  button: { backgroundColor: '#2196f3', padding: 14, borderRadius: 8, alignSelf: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
});

export default ExportScreen;
