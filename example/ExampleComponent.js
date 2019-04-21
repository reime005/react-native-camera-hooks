import * as React from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from '../src/hooks';

export const ExampleComponent = ({ initialProps }) => {
  const [
    { cameraRef, type, ratio, autoFocus, autoFocusPoint },
    { toggleFacing, touchToFocus, textRecognized, facesDetected },
  ] = useCamera(initialProps);

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        autoFocusPointOfInterest={autoFocusPoint.normalized}
        type={type}
        ratio={ratio}
        style={{ flex: 1 }}
        autoFocus={autoFocus}
        onTextRecognized={textRecognized}
        onFacesDetected={facesDetected}
      />

      <TouchableWithoutFeedback
        style={{
          flex: 1,
        }}
        onPress={touchToFocus}
      />

      <TouchableOpacity
        testID="button"
        onPress={toggleFacing}
        style={{ width: '100%', height: 45 }}>
        {type}
      </TouchableOpacity>
    </View>
  );
};
