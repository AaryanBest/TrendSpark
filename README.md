# Expo React Native TypeScript Stack 🚀

A modern React Native application built with [Expo](https://expo.dev), featuring TypeScript, React Native Reanimated 2, Skia, NativeWind (Tailwind CSS), Zustand, and more.

## Stack

- **React Native** 0.81.5 with Expo 54
- **TypeScript** for type safety
- **React Native Reanimated 2** for advanced animations
- **React Native Skia** for high-performance graphics
- **React Native Gesture Handler** for touch gestures
- **NativeWind** with Tailwind CSS for styling
- **Zustand** for state management
- **Expo Packages**:
  - Expo AV for audio/video
  - Expo Haptics for haptic feedback
  - Expo Linear Gradient
  - Expo Blur View
  - Expo Font
  - And more...

## Project Structure

```
├── src/
│   ├── components/      # Reusable UI components
│   ├── screens/         # Screen components
│   ├── state/           # Zustand stores
│   ├── theme/           # Theme configuration and colors
│   └── assets/          # Local assets
├── app/                 # Expo Router structure (file-based routing)
├── assets/              # Public assets
├── babel.config.js      # Babel configuration with Reanimated
├── tailwind.config.js   # NativeWind/Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Expo CLI (installed via npx)
- For iOS: Xcode and macOS (or use Expo Go without building)
- For Android: Android Studio and Android SDK (or use Expo Go without building)

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app:

   ```bash
   npm start
   ```

   Or use the convenient shortcuts:
   - Start on iOS simulator: `npm run ios`
   - Start on Android emulator: `npm run android`
   - Start on web: `npm run web`

### Running on Expo Go

In the terminal output from `npm start`, you'll see a QR code. Scan it with your phone using:

- **iOS**: Camera app or built-in QR scanner
- **Android**: Expo Go app

This will open the app in Expo Go for quick testing and development.

### Building for Simulators

To test Reanimated worklets and other advanced features, create a development build:

```bash
npm run ios       # Creates and runs development build on iOS simulator
npm run android   # Creates and runs development build on Android emulator
```

## Scripts

- `npm start` - Start the development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator (macOS only)
- `npm run web` - Run on web
- `npm run lint` - Run ESLint
- `npm run reset-project` - Reset to a blank slate

## Development

### Adding New Components

Create components in `src/components/` with TypeScript. Use NativeWind classes for styling:

```tsx
import { View, Text } from 'react-native';

export const MyComponent = () => (
  <View className="flex-1 justify-center items-center bg-white">
    <Text className="text-2xl font-bold text-blue-500">Hello</Text>
  </View>
);
```

### Using Zustand for State

State management is handled with Zustand stores in `src/state/`:

```tsx
import { useAppStore } from '@/state/appStore';

export const MyScreen = () => {
  const { isLoading, setIsLoading } = useAppStore();

  return (
    <Button
      onPress={() => setIsLoading(!isLoading)}
      title={isLoading ? 'Loading...' : 'Press Me'}
    />
  );
};
```

### Animations with Reanimated

Use React Native Reanimated for smooth 60/120fps animations:

```tsx
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export const AnimatedBox = () => {
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Text>Animated Content</Text>
    </Animated.View>
  );
};
```

### Graphics with Skia

For custom graphics and 2D drawing:

```tsx
import { Canvas, Circle } from '@react-native-skia/skia';

export const SkiaGraphic = () => (
  <Canvas style={{ flex: 1 }}>
    <Circle cx={100} cy={100} r={50} color="blue" />
  </Canvas>
);
```

## Troubleshooting

### Reanimated Worklets Not Working

Ensure `babel.config.js` includes the Reanimated plugin:

```js
plugins: ['react-native-reanimated/plugin'];
```

### NativeWind Styles Not Applied

Make sure `babel.config.js` includes the NativeWind plugin:

```js
plugins: [['nativewind/babel']];
```

### Build Issues on Simulators

Clear cache and reinstall:

```bash
npm run reset-project
npm install
npm start
```

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [React Native Skia](https://shopify.github.io/react-native-skia/)
- [NativeWind](https://www.nativewind.dev/)
- [Zustand](https://github.com/pmndrs/zustand)

## License

This project is private and created for development purposes.
