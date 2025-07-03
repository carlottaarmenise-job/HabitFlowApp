import { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

// 📣 Notifiche
export const NotificationsScreen = () => {
  const [enabled, setEnabled] = useState(false);

  return (
   <View style={styles.container}>
      <Text style={styles.title}>📣 Notifiche</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Abilita notifiche giornaliere</Text>
        <Switch value={enabled} onValueChange={setEnabled} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  row:{flexDirection:'row',alignItems:'center', justifyContent:'space-between' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  label: { fontSize: 16 },
});
export default NotificationsScreen;