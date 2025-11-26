import React from 'react';
import { Canvas, Circle, Rect, Paint } from '@shopify/react-native-skia';

export const SkiaShape: React.FC = () => {
  return (
    <Canvas style={{ width: 200, height: 200, marginVertical: 20 }}>
      <Rect x={10} y={10} width={180} height={180}>
        <Paint color="#E8F4FD" />
      </Rect>
      <Circle cx={100} cy={100} r={50}>
        <Paint color="#007AFF" />
      </Circle>
    </Canvas>
  );
};
