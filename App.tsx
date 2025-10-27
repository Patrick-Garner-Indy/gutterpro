// App.tsx
import React from 'react';
import { StatusBar } from 'react-native';
import { AppNavigator } from './src/navigation/AppNavigator';

export default function App() {
  return (
    <>
      {/* Set a consistent status bar style */}
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Navigation container and stack come from AppNavigator */}
      <AppNavigator />
    </>
  );
}
