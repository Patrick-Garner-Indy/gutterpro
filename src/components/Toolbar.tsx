// src/components/Toolbar.tsx
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ToolbarProps {
  onSave?: () => void;
  onReset?: () => void;
  onMeasure?: () => void;
  onModeChange?: (mode: string) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onSave,
  onReset,
  onMeasure,
  onModeChange,
}) => {
  const buttons = [
    { label: 'Measure', icon: 'straighten', action: onMeasure },
    { label: 'Mode', icon: 'build', action: () => onModeChange && onModeChange('edit') },
    { label: 'Reset', icon: 'refresh', action: onReset },
    { label: 'Save', icon: 'save', action: onSave },
  ];

  return (
    <View className="flex-row justify-around bg-gray-800 p-3 rounded-lg mt-2">
      {buttons.map(({ label, icon, action }) => (
        <TouchableOpacity
          key={label}
          onPress={action}
          className="flex items-center justify-center"
        >
          <MaterialIcons name={icon as any} size={24} color="#fff" />
          <Text className="text-white text-xs mt-1">{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
