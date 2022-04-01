import React from 'react';
import {Canvas, Circle, Group} from '@shopify/react-native-skia';
import {SafeAreaView} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
const HelloWorld = () => {
  const r = WP(20);
  const w = WP(60);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Canvas style={{flex: 1}}>
        <Group blendMode="multiply">
          <Circle cx={w} cy={r} r={r} color="cyan" />
          <Circle cx={w / 2 + r} cy={w - r} r={r} color="yellow" />
          <Circle cx={r * 2} cy={r} r={r} color="magenta" />
        </Group>
      </Canvas>
    </SafeAreaView>
  );
};

export default HelloWorld;
