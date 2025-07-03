import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import HabitCard from '../components/HabitCard';
import { useHabits } from '../context/HabitContext';
import { useNavigation } from '@react-navigation/native';
import { getTodayDate } from '../utils/dateUtils';
import { useActionSheet } from '@expo/react-native-action-sheet';

const HomeScreen = () => {
  const { habits, toggleHabit, deleteHabit } = useHabits();
  const navigation = useNavigation();
  const { showActionSheetWithOptions } = useActionSheet();

  const today = getTodayDate();

  const completedTodayCount = habits.filter(habit =>
    habit.datesCompleted?.includes(today)
  ).length;

  const handleHabitPress = (habit) => {
    const options = ['Modifica', 'Elimina', 'Annulla'];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
        title: habit.name,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          navigation.navigate('AddHabit', { habit });
        } else if (buttonIndex === 1) {
          Alert.alert(
            'Elimina abitudine',
            `Sei sicuro di voler eliminare "${habit.name}"?`,
            [
              { text: 'Annulla', style: 'cancel' },
              { text: 'Elimina', style: 'destructive', onPress: () => deleteHabit(habit.id) },
            ]
          );
        }
      }
    );
  };

  const renderHabit = ({ item }) => (
    <HabitCard
      habit={item}
      onToggle={() => toggleHabit(item.id)}
      onPress={() => handleHabitPress(item)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Le tue abitudini</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('AddHabit')}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>＋ Nuova abitudine</Text>
      </TouchableOpacity>

      <FlatList
        data={habits}
        renderItem={renderHabit}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  addButton: {
    backgroundColor: '#2196f3',
    marginHorizontal: 16,
    marginBottom: 8,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
