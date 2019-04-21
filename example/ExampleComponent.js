import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from '../src/hooks';

export const ExampleComponent = ({ initialProps }) => {
  const [{ cameraRef, type, ratio }, { toggleFacing }] = useCamera(
    initialProps,
  );

  return (
    <View style={{ flex: 1 }}>
      <RNCamera ref={cameraRef} type={type} ratio={ratio} style={{ flex: 1 }} />
      <TouchableOpacity
        testID="button"
        onPress={toggleFacing}
        style={{ width: '100%', height: 45 }}
      >
        {type}
      </TouchableOpacity>
    </View>
  );
};
