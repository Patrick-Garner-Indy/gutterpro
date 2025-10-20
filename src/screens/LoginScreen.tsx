// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log({ email, password });
    // TODO: Add login logic
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 justify-center p-6 bg-white">
        <Text className="text-2xl font-bold mb-4 text-center">Login</Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          className="border p-3 mb-3"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          className="border p-3 mb-3"
          secureTextEntry
        />

        <Button title="Login" onPress={handleLogin} />
      </View>
    </ScrollView>
  );
};
