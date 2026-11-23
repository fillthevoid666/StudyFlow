import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

import HomeScreen from '../screens/HomeScreen';
import TasksScreen from '../screens/TasksScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator({ tasks, schedules, onToggleTask }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: '700',
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarStyle: {
          backgroundColor: COLORS.card,
          borderTopColor: COLORS.border,
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'TasksTab') {
            iconName = focused ? 'checkbox' : 'checkbox-outline';
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeTab" options={{ title: 'Beranda' }}>
        {(props) => (
          <HomeScreen
            {...props}
            tasks={tasks}
            schedules={schedules}
            onToggleTask={onToggleTask}
          />
        )}
      </Tab.Screen>

      <Tab.Screen name="TasksTab" options={{ title: 'Daftar Tugas' }}>
        {(props) => (
          <TasksScreen
            {...props}
            tasks={tasks}
            onToggleTask={onToggleTask}
          />
        )}
      </Tab.Screen>

      <Tab.Screen name="ProfileTab" options={{ title: 'Profil' }}>
        {(props) => <ProfileScreen {...props} tasks={tasks} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function AppNavigator({
  tasks,
  schedules,
  onAddTask,
  onToggleTask,
  onDeleteTask,
}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: '700',
          },
        }}
      >
        {/* Menu Utama (Bottom Tab Navigation) */}
        <Stack.Screen name="MainTabs" options={{ headerShown: false }}>
          {(props) => (
            <MainTabNavigator
              {...props}
              tasks={tasks}
              schedules={schedules}
              onToggleTask={onToggleTask}
            />
          )}
        </Stack.Screen>

        {/* Halaman Bertingkat (Stack Navigation) */}
        <Stack.Screen
          name="AddTask"
          options={{ title: 'Tambah Tugas Baru' }}
        >
          {(props) => <AddTaskScreen {...props} onAddTask={onAddTask} />}
        </Stack.Screen>

        <Stack.Screen
          name="TaskDetail"
          options={{ title: 'Detail Tugas' }}
        >
          {(props) => (
            <TaskDetailScreen
              {...props}
              tasks={tasks}
              onToggleTask={onToggleTask}
              onDeleteTask={onDeleteTask}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}