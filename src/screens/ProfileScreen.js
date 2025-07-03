import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useHabits } from '../context/HabitContext';

const ProfileScreen = () => {
  const { habits } = useHabits();

  const totalHabits = habits.length;
  const totalCompletions = habits.reduce(
    (sum, h) => sum + (h.datesCompleted?.length || 0),
    0
  );
  const currentStreak = habits.reduce(
    (sum, h) => sum + (h.completedToday ? 1 : 0),
    0
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>👤 Profilo</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Utente</Text>
          <Text style={styles.value}>Tu 🧠</Text>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>utente@email.com</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <View style={styles.row}>
              <Ionicons name="checkmark-done" size={24} color="#2196f3" />
              <Text style={styles.statValue}>{totalCompletions}</Text>
            </View>
            <Text style={styles.statLabel}>Completamenti</Text>
          </View>
          <View style={styles.statBox}>
            <View style={styles.row}>
              <Ionicons name="flame" size={24} color="#f44336" />
              <Text style={styles.statValue}>{currentStreak}</Text>
            </View>
            <Text style={styles.statLabel}>Streak oggi</Text>
          </View>
          <View style={styles.statBox}>
            <View style={styles.row}>
              <Ionicons name="list" size={24} color="#9c27b0" />
              <Text style={styles.statValue}>{totalHabits}</Text>
            </View>
            <Text style={styles.statLabel}>Totale abitudini</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 4,
    color: '#000',
  },
  statLabel: {
    marginTop: 6,
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
});

export default ProfileScreen;
