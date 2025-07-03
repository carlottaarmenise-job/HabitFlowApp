import React from 'react';
import { HabitProvider } from './src/context/HabitContext';
import HomeScreen from './src/screens/HomeScreen';
import AddHabitScreen from './src/screens/AddHabitScreen';
import StatsScreen from './src/screens/StatsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import GoalsScreen from './src/screens/GoalsScreen';
import InspirationScreen from './src/screens/InspirationScreen';
import ExportScreen from './src/screens/ExportScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import BackupRestoreScreen from './src/screens/BackupRestoreScreen';
import FeedbackScreen from './src/screens/FeedbackScreen';
import AppInfoScreen from './src/screens/AppInfoScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'checkmark-done-outline';
              break;
            case 'Stats':
              iconName = 'bar-chart-outline';
              break;
            case 'Goals':
              iconName = 'flag-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
            case 'More':
              iconName = 'ellipsis-horizontal-circle-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2196f3',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Goals" component={GoalsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}

export function MoreScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MoreMenu"
        component={MoreMenuScreen}
        options={{ title: 'Altre pagine' }}
      />
      <Stack.Screen name="Inspiration" component={InspirationScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Export" component={ExportScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="BackupRestore" component={BackupRestoreScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="AppInfo" component={AppInfoScreen} />
    </Stack.Navigator>
  );
}


function MoreMenuScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Altro</Text>

      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('Inspiration')}>
        <Text style={styles.itemText}>💡 Ispirazione</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('History')}>
        <Text style={styles.itemText}>🕘 Cronologia</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('Export')}>
        <Text style={styles.itemText}>📄 Esporta dati</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('Notifications')}>
        <Text style={styles.itemText}>🔔 Notifiche</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('BackupRestore')}>
        <Text style={styles.itemText}>📀 Backup & Ripristino</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('Feedback')}>
        <Text style={styles.itemText}>✉️ Feedback</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('AppInfo')}>
        <Text style={styles.itemText}>ℹ️ Info app</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 24, // 👈 più spazio ai lati
    backgroundColor: '#fff',
  },
  title: {
    padding: 12,
    paddingBottom: 0,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 12, // 👈 margine interno per evitare che il testo tocchi i bordi
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 12,
  },
  itemText: {
    fontSize: 16,
  },
  arrow: {
    fontSize: 18,
    color: '#888',
  },
});

export default function App() {
  return (
    <HabitProvider>
      <ActionSheetProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
              <Stack.Screen name="AddHabit" component={AddHabitScreen} options={{ title: 'Nuova abitudine' }} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ActionSheetProvider>
    </HabitProvider>
  );
}
