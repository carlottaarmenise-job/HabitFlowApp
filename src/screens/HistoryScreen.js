import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useHabits } from '../context/HabitContext';

const HistoryScreen = () => {
  const { habits } = useHabits();

  const entries = habits.flatMap((h) =>
    h.datesCompleted.map((d) => ({ name: h.name, date: d }))
  ).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🕓 Cronologia</Text>
      <FlatList
        data={entries}
        keyExtractor={(item, idx) => item.name + item.date + idx}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nessuna voce</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  item: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderColor: '#eee' },
  name: { fontSize: 16 },
  date: { fontSize: 14, color: '#666' },
  empty: { textAlign: 'center', marginTop: 40, color: '#888' },
});

export default HistoryScreen;
