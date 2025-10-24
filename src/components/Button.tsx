import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-blue-500 px-4 py-2 rounded-lg items-center"
    >
      <Text className="text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
}
