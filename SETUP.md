# Project Setup Guide

## Environment Requirements

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher
- **OS**: macOS, Windows, or Linux
- **Xcode** (macOS only, for iOS development)
- **Android Studio** (for Android development)

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:

- React Native & Expo
- React Native Reanimated 2 with worklet support
- React Native Skia for graphics
- NativeWind/Tailwind CSS for styling
- Zustand for state management
- Gesture Handler
- And all supporting Expo packages

### 2. Verify Configuration

Ensure these files are properly configured:

- `babel.config.js` - Contains Reanimated and NativeWind plugins
- `tailwind.config.js` - NativeWind configuration
- `app.json` - Expo plugins configuration
- `tsconfig.json` - TypeScript strict mode enabled

## Running the App

### Option 1: Expo Go (Recommended for quick testing)

```bash
npm start
```

Scan the QR code with:

- **iOS**: Use the camera app or built-in QR scanner
- **Android**: Use the Expo Go app

**Note**: Some features like Reanimated worklets may have limitations in Expo Go.

### Option 2: Development Build (For full feature support)

#### iOS (macOS only)

```bash
npm run ios
```

This creates a development build and opens it in the iOS simulator.

#### Android

```bash
npm run android
```

This creates a development build and opens it in the Android emulator.

### Option 3: Web

```bash
npm run web
```

Opens the app in your default web browser.

## Project Structure

```
project/
├── src/                          # Custom source code
│   ├── components/              # Reusable UI components
│   │   ├── Button.tsx          # Example button component
│   │   ├── AnimatedBox.tsx      # Reanimated animation example
│   │   └── SkiaShape.tsx        # Skia graphics example
│   ├── screens/                 # Screen components
│   │   └── HomeScreen.tsx       # Main home screen
│   ├── state/                   # Zustand stores
│   │   └── appStore.ts          # Example app state
│   ├── theme/                   # Theme and styling
│   │   └── colors.ts            # Color palette
│   └── assets/                  # Local assets (images, fonts, etc.)
├── app/                         # Expo Router (file-based routing)
│   ├── (tabs)/                 # Tab-based navigation structure
│   ├── _layout.tsx             # Root layout
│   └── modal.tsx               # Modal example
├── assets/                     # Public assets
├── components/                 # Existing components (can be refactored)
├── hooks/                      # Custom React hooks
├── constants/                  # Constants
├── babel.config.js             # Babel configuration
├── tailwind.config.js          # Tailwind/NativeWind config
├── app.json                    # Expo configuration
├── tsconfig.json               # TypeScript configuration
├── .prettierrc.json            # Prettier formatting
└── README.md                   # Documentation
```

## Development Workflow

### Adding a New Component

1. Create the component in `src/components/`:

```tsx
// src/components/MyComponent.tsx
import React from 'react';
import { View, Text } from 'react-native';

export const MyComponent: React.FC = () => (
  <View className="flex-1 justify-center items-center bg-white">
    <Text className="text-lg font-semibold text-gray-800">Hello</Text>
  </View>
);
```

2. Export it from the index file:

```typescript
// src/components/index.ts
export { MyComponent } from './MyComponent';
```

3. Use it in your screens or other components:

```tsx
import { MyComponent } from '@/src/components';
```

### Using State Management (Zustand)

```tsx
import { useAppStore } from '@/src/state';

export const MyScreen = () => {
  const { isLoading, setIsLoading } = useAppStore();

  return (
    <Button
      title={isLoading ? 'Loading...' : 'Click me'}
      onPress={() => setIsLoading(!isLoading)}
    />
  );
};
```

### Creating Animations (Reanimated)

```tsx
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

export const AnimatedComponent = () => {
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const spin = () => {
    rotation.value = withSpring(rotation.value + 360);
  };

  return (
    <Animated.View style={animatedStyle}>
      <Text>Rotating Box</Text>
    </Animated.View>
  );
};
```

### Creating Custom Graphics (Skia)

```tsx
import { Canvas, Circle, Rect, Paint } from '@shopify/react-native-skia';

export const GraphicsComponent = () => (
  <Canvas style={{ width: 300, height: 300 }}>
    <Rect x={0} y={0} width={300} height={300}>
      <Paint color="white" />
    </Rect>
    <Circle cx={150} cy={150} r={100}>
      <Paint color="blue" />
    </Circle>
  </Canvas>
);
```

### Styling with NativeWind

Use Tailwind CSS classes directly in your components:

```tsx
<View className="flex-1 bg-gradient-to-b from-blue-400 to-purple-500">
  <Text className="text-2xl font-bold text-white text-center mt-8">Styled Text</Text>
</View>
```

## Available Scripts

- `npm start` - Start the development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run on web
- `npm run lint` - Run ESLint checks
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is formatted
- `npm run reset-project` - Reset to a blank slate

## Troubleshooting

### Issue: Reanimated Worklets Not Working

**Solution**: Make sure you're running on a development build (iOS/Android simulator), not Expo Go. Expo Go has limited support for worklets.

```bash
npm run ios   # or npm run android
```

### Issue: NativeWind Styles Not Applied

**Solution**: Rebuild the cache:

```bash
npm start -- --clear
```

### Issue: TypeScript Errors

**Solution**: Ensure all packages are properly installed and TypeScript is up-to-date:

```bash
npm install
npm run lint
```

### Issue: Build Fails on iOS

**Solution**: Clear build artifacts and try again:

```bash
rm -rf ios && npm run ios
```

### Issue: Build Fails on Android

**Solution**: Clear Android build cache:

```bash
rm -rf android && npm run android
```

## Performance Tips

1. **Use Reanimated for animations** - Don't use React state for frequent updates
2. **Optimize images** - Use `expo-image` for better performance
3. **Code splitting** - Use dynamic imports with React.lazy() for screens
4. **Memoization** - Use React.memo for components that receive props
5. **Zustand devtools** - Monitor state changes in development

## Deployment

For production builds, refer to:

- [Expo Build Documentation](https://docs.expo.dev/build/introduction/)
- [EAS Submit](https://docs.expo.dev/submit/introduction/)

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [React Native Skia](https://shopify.github.io/react-native-skia/)
- [NativeWind](https://www.nativewind.dev/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Tailwind CSS](https://tailwindcss.com/)

## Support

For issues or questions:

1. Check the troubleshooting section above
2. Review official documentation
3. Check GitHub issues for similar problems
4. Create a new issue with detailed information
