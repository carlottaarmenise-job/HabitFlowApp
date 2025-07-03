import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@habitflow_habits';

export const saveHabitsToStorage = async (habits) => {
  try {
    const json = JSON.stringify(habits);
    await AsyncStorage.setItem(STORAGE_KEY, json);
  } catch (error) {
    console.error('Errore salvataggio:', error);
  }
};

export const loadHabitsFromStorage = async () => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json != null ? JSON.parse(json) : [];
  } catch (error) {
    console.error('Errore caricamento:', error);
    return [];
  }
};


const LAST_USED_KEY = '@habitflow_last_used';

export const saveLastUsedDate = async (date) => {
  try {
    await AsyncStorage.setItem(LAST_USED_KEY, date);
  } catch (e) {
    console.error('Errore salvataggio data:', e);
  }
};

export const loadLastUsedDate = async () => {
  try {
    const date = await AsyncStorage.getItem(LAST_USED_KEY);
    return date || null;
  } catch (e) {
    console.error('Errore caricamento data:', e);
    return null;
  }
};
