// src/navigation/AppNavigator.tsx
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthNavigator } from './AuthNavigator';
import { DashboardScreen } from '../screens/DashboardScreen';
import { AuthProvider, useAuth } from '../navigation/AuthContext'; // ✅ corrected path

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const RootNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#007AFF" />
        <Text className="mt-3 text-gray-600">Loading...</Text>
      </View>
    );
  }

  return user ? <MainNavigator /> : <AuthNavigator />;
};

export const AppNavigator = () => (
  <AuthProvider>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </AuthProvider>
);
