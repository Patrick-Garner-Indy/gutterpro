import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Alert } from 'react-native';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { useAuth } from '../hooks/useAuth';

export const LoginScreen: React.FC = () => {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Missing Information', 'Please enter both email and password.');
      return;
    }

    try {
      await login(email, password);
      Alert.alert('Success', 'Logged in successfully!');
    } catch (error: any) {
      Alert.alert('Login Failed', error.message || 'Something went wrong.');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 justify-center p-6 bg-white">
        <Text className="text-2xl font-bold mb-4 text-center">Welcome to GutterPro</Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          className="border p-3 mb-3 rounded-lg"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          className="border p-3 mb-4 rounded-lg"
          secureTextEntry
        />

        <ButtonPrimary
          title={loading ? 'Logging in...' : 'Login'}
          onPress={handleLogin}
          loading={loading}
          icon="login"
        />
      </View>
    </ScrollView>
  );
};
