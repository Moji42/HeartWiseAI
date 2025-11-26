import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LayoutDashboard, Heart, BookOpen, MessageCircle } from 'lucide-react-native';
import { MainTabParamList } from './types';
import { useTheme } from '@/contexts/ThemeContext';
import DashboardScreen from '@/screens/DashboardScreen';
import MoodTrackerScreen from '@/screens/MoodTrackerScreen';
import JournalScreen from '@/screens/JournalScreen';
import AICoachScreen from '@/screens/AICoachScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainNavigator() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.card,
          borderTopColor: theme.colors.border,
          borderTopWidth: 1,
          height: 84,
          paddingBottom: 24,
          paddingTop: 12,
        },
        tabBarActiveTintColor: theme.colors.primary.main,
        tabBarInactiveTintColor: theme.colors.mutedForeground,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <LayoutDashboard size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MoodTracker"
        component={MoodTrackerScreen}
        options={{
          tabBarLabel: 'Mood',
          tabBarIcon: ({ color, size }) => <Heart size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Journal"
        component={JournalScreen}
        options={{
          tabBarLabel: 'Journal',
          tabBarIcon: ({ color, size }) => <BookOpen size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="AICoach"
        component={AICoachScreen}
        options={{
          tabBarLabel: 'AI Coach',
          tabBarIcon: ({ color, size }) => (
            <MessageCircle size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

