import React, { useState } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export const AnimatedBox: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const handlePress = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      scale.value = withSpring(1.5);
      opacity.value = withTiming(0.8, { duration: 300 });
    } else {
      scale.value = withSpring(1);
      opacity.value = withTiming(1, { duration: 300 });
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: '#007AFF',
            borderRadius: 12,
            marginVertical: 20,
          },
          animatedStyle,
        ]}
      />
    </Pressable>
  );
};
