import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/screens/LoginScreen';
import { DashboardScreen } from './src/screens/DashboardScreen';
import { JobFormScreen } from './src/screens/JobFormScreen';

export type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined; // no props needed
  JobForm: undefined; // can add params later if needed
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="JobForm" component={JobFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
