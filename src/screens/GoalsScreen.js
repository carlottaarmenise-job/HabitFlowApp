import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

const GoalsScreen = () => {
  const [goals, setGoals] = useState([]);
  const [text, setText] = useState('');

  const addGoal = () => {
    if (text.trim()) {
      setGoals((g) => [...g, { id: Date.now().toString(), text }]);
      setText('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>🎯 Obiettivi</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nuovo obiettivo"
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity style={styles.button} onPress={addGoal}>
            <Text style={styles.buttonText}>Aggiungi</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.goal}>{item.text}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  form: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 6,
  },
  button: {
    backgroundColor: '#2196f3',
    padding: 10,
    borderRadius: 6,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
  },
  goal: {
    fontSize: 16,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});

export default GoalsScreen;
