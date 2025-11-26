import React from 'react';
import { Pressable, Text, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        {
          backgroundColor: disabled ? '#ccc' : '#007AFF',
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
          opacity: pressed ? 0.7 : 1,
        },
        style,
      ]}
    >
      <Text
        style={[
          {
            color: '#fff',
            fontSize: 16,
            fontWeight: '600',
            textAlign: 'center',
          },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};
