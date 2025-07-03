import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  saveHabitsToStorage,
  loadHabitsFromStorage,
  saveLastUsedDate,
  loadLastUsedDate,
} from '../utils/storage';
import { getTodayDate, isNewDay } from '../utils/dateUtils';

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    (async () => {
      const [storedHabits, lastDate] = await Promise.all([
        loadHabitsFromStorage(),
        loadLastUsedDate(),
      ]);

      const today = getTodayDate();

      let updatedHabits = storedHabits.map((habit) => ({
        ...habit,
        datesCompleted: habit.datesCompleted || [],
        completedToday: habit.datesCompleted?.includes(today) || false,
      }));

      if (isNewDay(lastDate)) {
        updatedHabits = updatedHabits.map((habit) => ({
          ...habit,
          completedToday: false,
        }));
        await saveHabitsToStorage(updatedHabits);
      }

      setHabits(updatedHabits);
      await saveLastUsedDate(today);
    })();
  }, []);

  useEffect(() => {
    saveHabitsToStorage(habits);
  }, [habits]);

  const addHabit = (habit) => {
    setHabits((prev) => [
      ...prev,
      {
        ...habit,
        completedToday: false,
        datesCompleted: [],
      },
    ]);
  };

  const updateHabit = (updatedHabit) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === updatedHabit.id
          ? {
              ...habit,
              name: updatedHabit.name,
              emoji: updatedHabit.emoji,
              // Aggiungi altri campi se necessario
            }
          : habit
      )
    );
  };

  const toggleHabit = (id) => {
    const today = getTodayDate();

    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit;

        const isCompleted = habit.datesCompleted?.includes(today);
        let updatedDates = habit.datesCompleted || [];

        if (isCompleted) {
          updatedDates = updatedDates.filter((date) => date !== today);
        } else {
          updatedDates = [...updatedDates, today];
        }

        return {
          ...habit,
          completedToday: !isCompleted,
          datesCompleted: updatedDates,
        };
      })
    );
  };

  const deleteHabit = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  return (
    <HabitContext.Provider
      value={{
        habits,
        addHabit,
        updateHabit,
        toggleHabit,
        deleteHabit,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabits = () => useContext(HabitContext);
