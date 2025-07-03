import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useHabits } from '../context/HabitContext';
import { useRoute } from '@react-navigation/native';
import uuid from 'react-native-uuid';

const AddHabitScreen = ({ navigation }) => {
  const { addHabit, updateHabit } = useHabits();
  const [emoji, setEmoji] = useState('💡');
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('');
  const route = useRoute();
  const editingHabit = route.params?.habit;

  useEffect(() => {
    if (editingHabit) {
      setName(editingHabit.name);
      setEmoji(editingHabit.emoji);
      setFrequency(editingHabit.frequency || '');
    }
  }, [editingHabit]);

  const handleSubmit = () => {
    if (!name.trim()) return;

    if (editingHabit) {
      // 🔁 Aggiorna abitudine esistente
      updateHabit({
        ...editingHabit,
        name,
        emoji,
        frequency,
      });
    } else {
      // ➕ Aggiungi nuova abitudine
      addHabit({
        id: uuid.v4(),
        name,
        emoji,
        frequency,
        completedToday: false,
        datesCompleted: [],
      });
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome abitudine</Text>
      <TextInput
        style={styles.input}
        placeholder="Es. Bevi acqua"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Frequenza</Text>
      <TextInput
        style={styles.input}
        placeholder="Es. Giornaliero / Settimanale"
        value={frequency}
        onChangeText={setFrequency}
      />

      <Text style={styles.label}>Emoji</Text>
      <TextInput
        style={styles.input}
        value={emoji}
        onChangeText={setEmoji}
        placeholder="Emoji"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>
          {editingHabit ? 'Salva modifiche' : 'Aggiungi'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginTop: 12,
  },
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

export default AddHabitScreen;
