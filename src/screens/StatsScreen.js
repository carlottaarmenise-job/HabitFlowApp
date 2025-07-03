import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from 'react-native';
import ProgressChart from '../components/ProgressChart';
import { useHabits } from '../context/HabitContext';
import { getTodayDate } from '../utils/dateUtils';

const intervalOptions = [7, 14, 30];

const StatsScreen = () => {
  const { habits } = useHabits();
  const [interval, setInterval] = useState(7);
  const [showPerHabit, setShowPerHabit] = useState(false);

  const today = getTodayDate();

  const calculateStats = (habit) => {
    const completions = habit.datesCompleted?.filter((date) => {
      const diff = Math.floor(
        (new Date(today) - new Date(date)) / (1000 * 60 * 60 * 24)
      );
      return diff >= 0 && diff < interval;
    }).length;

    const percentage = interval ? (completions / interval) * 100 : 0;

    return {
      label: habit.name.length > 5 ? habit.name.slice(0, 5) + '…' : habit.name,
      value: Math.round(percentage),
    };
  };

  const habitStats = habits.map(calculateStats);
  const overallAvg =
    habitStats.reduce((sum, h) => sum + h.value, 0) / (habitStats.length || 1);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>📈 Statistiche</Text>

        {/* Intervallo Giorni */}
        <View style={styles.intervalSelector}>
          {intervalOptions.map((days) => (
            <TouchableOpacity
              key={days}
              style={[
                styles.intervalButton,
                interval === days && styles.intervalButtonActive,
              ]}
              onPress={() => setInterval(days)}
            >
              <Text
                style={[
                  styles.intervalText,
                  interval === days && styles.intervalTextActive,
                ]}
              >
                {days} giorni
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Toggle per visualizzazione */}
        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Mostra grafici per abitudine</Text>
          <Switch value={showPerHabit} onValueChange={setShowPerHabit} />
        </View>

        {/* Visualizzazione */}
        {showPerHabit
          ? habitStats.map((stat, idx) => (
              <View key={idx} style={styles.chartContainer}>
                <ProgressChart data={[stat]} />
              </View>
            ))
          : <ProgressChart data={habitStats} />
        }

        {/* Media generale */}
        <View style={styles.avgContainer}>
          <Text style={styles.avgText}>
            📉 Media generale: {Math.round(overallAvg)}%
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  intervalSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  intervalButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#aaa',
  },
  intervalButtonActive: {
    backgroundColor: '#2196f3',
    borderColor: '#2196f3',
  },
  intervalText: {
    fontSize: 14,
    color: '#444',
  },
  intervalTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  toggleLabel: {
    fontSize: 16,
  },
  chartContainer: {
    marginBottom: 16,
  },
  avgContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
  },
  avgText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StatsScreen;
