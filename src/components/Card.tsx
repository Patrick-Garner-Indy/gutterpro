import React from 'react';
import { View, Text } from 'react-native';

interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <View className="bg-white p-4 rounded-lg shadow mb-4">
      <Text className="text-lg font-bold">{title}</Text>
      <Text className="text-gray-700 mt-2">{description}</Text>
    </View>
  );
}
