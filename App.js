import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { INITIAL_TASKS, INITIAL_SCHEDULES } from './src/data/initialData';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [schedules] = useState(INITIAL_SCHEDULES);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <AppNavigator
        tasks={tasks}
        schedules={schedules}
        onAddTask={handleAddTask}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </SafeAreaProvider>
  );
}