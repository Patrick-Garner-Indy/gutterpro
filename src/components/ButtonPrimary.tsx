// src/components/ButtonPrimary.tsx
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, ViewStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ButtonPrimaryProps {
  title: string;
  onPress: () => void;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  title,
  onPress,
  icon,
  loading = false,
  disabled = false,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`flex-row items-center justify-center bg-blue-600 p-3 rounded-xl ${
        disabled ? 'opacity-50' : 'opacity-100'
      }`}
      style={style}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <>
          {icon && <MaterialIcons name={icon as any} size={20} color="#fff" style={{ marginRight: 6 }} />}
          <Text className="text-white font-semibold text-base">{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};
