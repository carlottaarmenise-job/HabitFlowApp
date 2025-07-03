import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HabitCard = ({ habit, onToggle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.name}>
          {habit.emoji} {habit.name}
        </Text>
        <Text style={styles.frequency}>{habit.frequency}</Text>
      </View>
      <TouchableOpacity onPress={onToggle} style={[styles.status, habit.completedToday && styles.completed]}>
        <Text style={styles.statusText}>{habit.completedToday ? '✓' : '○'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 2,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  frequency: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  status: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completed: {
    backgroundColor: '#4caf50',
    borderColor: '#4caf50',
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HabitCard;
