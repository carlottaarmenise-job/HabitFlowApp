import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const BackupRestoreScreen = () => {
  const handleBackup = () => Alert.alert('Backup creato', 'I tuoi dati sono stati salvati.');
  const handleRestore = () => Alert.alert('Ripristino effettuato', 'I dati sono stati recuperati.');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💾 Backup & Ripristino</Text>
      <TouchableOpacity style={styles.button} onPress={handleBackup}>
        <Text style={styles.buttonText}>Esegui Backup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRestore}>
        <Text style={styles.buttonText}>Ripristina</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
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

export default BackupRestoreScreen;
