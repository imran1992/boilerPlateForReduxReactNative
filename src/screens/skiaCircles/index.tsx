import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Canvas, Circle, Group} from '@shopify/react-native-skia';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
const r = WP(20);
const w = WP(60);
const HelloWorld = () => {
  return (
    <View style={style.container}>
      <Canvas style={style.canvas}>
        <Group blendMode="multiply">
          <Circle cx={w} cy={r} r={r} color="cyan" />
          <Circle cx={w / 2 + r} cy={w - r} r={r} color="yellow" />
          <Circle cx={r * 2} cy={r} r={r} color="magenta" />
        </Group>
      </Canvas>
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, marginTop: 10},
  canvas: {flex: 1},
});
export default HelloWorld;
