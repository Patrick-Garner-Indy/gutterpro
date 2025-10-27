// src/screens/SettingsScreen.tsx
import React, { useState } from 'react';
import { ScrollView, View, Text, Switch } from 'react-native';
import { ButtonPrimary } from '../components/ButtonPrimary';

export const SettingsScreen: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);
  const toggleDarkMode = () => setDarkModeEnabled((prev) => !prev);

  const handleLogout = () => {
    console.log('User logged out');
    // TODO: Add logout logic
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
      <View className="flex-1 bg-white">
        <Text className="text-xl font-bold mb-6 text-center">Settings</Text>

        <View className="mb-4 flex-row justify-between items-center">
          <Text className="font-semibold">Enable Notifications</Text>
          <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
        </View>

        <View className="mb-4 flex-row justify-between items-center">
          <Text className="font-semibold">Dark Mode</Text>
          <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
        </View>

        <ButtonPrimary title="Logout" onPress={handleLogout} />
      </View>
    </ScrollView>
  );
};
