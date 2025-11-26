import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { Button } from '../components/Button';
import { useAppStore } from '../state/appStore';

export const HomeScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { isLoading, setIsLoading } = useAppStore();

  const handlePress = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsLoading(!isLoading);
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 16 }}
    >
      <View style={{ alignItems: 'center', gap: 24 }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#000' }}>Welcome to Expo</Text>
        <Text style={{ fontSize: 16, color: '#666', textAlign: 'center' }}>
          Your React Native app with TypeScript, Reanimated, Skia, NativeWind, and Zustand
        </Text>
        <Button
          title={isLoading ? 'Loading...' : 'Press Me'}
          onPress={handlePress}
          disabled={isLoading}
        />
      </View>
    </ScrollView>
  );
};
