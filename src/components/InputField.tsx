import React from 'react';
import { View, TextInput, Text, TextInputProps } from 'react-native';

interface InputFieldProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <View className="mb-4">
      {label && <Text className="mb-1 font-semibold">{label}</Text>}
      <TextInput
        className="border p-3 rounded-lg bg-white"
        {...props}
      />
      {error && <Text className="text-red-500 mt-1">{error}</Text>}
    </View>
  );
};
