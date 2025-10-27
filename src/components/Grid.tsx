// src/components/Grid.tsx
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

interface GridProps {
  rows?: number;
  columns?: number;
  onCellPress?: (row: number, col: number) => void;
}

export const Grid: React.FC<GridProps> = ({
  rows = 5,
  columns = 5,
  onCellPress,
}) => {
  const [selectedCells, setSelectedCells] = useState<{ [key: string]: boolean }>({});

  const handlePress = (row: number, col: number) => {
    const key = `${row}-${col}`;
    setSelectedCells((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

    if (onCellPress) {
      onCellPress(row, col);
    }
  };

  return (
    <View className="flex flex-col items-center justify-center p-4">
      {Array.from({ length: rows }).map((_, row) => (
        <View key={row} className="flex flex-row">
          {Array.from({ length: columns }).map((_, col) => {
            const key = `${row}-${col}`;
            const selected = selectedCells[key];
            return (
              <TouchableOpacity
                key={col}
                onPress={() => handlePress(row, col)}
                className={`w-12 h-12 m-1 border rounded-lg ${
                  selected ? 'bg-blue-500' : 'bg-gray-200'
                } flex items-center justify-center`}
              >
                <Text className="text-white">{selected ? '✓' : ''}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
};
