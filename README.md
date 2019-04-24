<p>&nbsp;</p>
<p align="center">
  <img src="logo.png" width="350" title="hover text">
  <p align='center'>React Hooks for React Native Camera</p>
</p>
<p>&nbsp;</p>

[![npm](https://img.shields.io/npm/v/react-native-camera-hooks.svg?style=flat-square)](http://npm.im/react-native-camera-hooks)
[![MIT License](https://img.shields.io/npm/l/react-native-camera-hooks.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Travis](https://img.shields.io/travis/ctrlplusb/react-native-camera-hooks.svg?style=flat-square)](https://travis-ci.org/reime005/react-native-camera-hooks)

```javascript
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

const FunctionalComponentExample = ({ initialProps }) => {
  const [
    { cameraRef, type, ratio, autoFocus, autoFocusPoint, isRecording },
    {
      toggleFacing,
      touchToFocus,
      textRecognized,
      facesDetected,
      recordVideo,
      setIsRecording,
    },
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

      {!isRecording && (
        <TouchableOpacity
          testID="button"
          onPress={async () => {
            try {
              setIsRecording(true);
              const data = await recordVideo();
              console.warn(data);
            } catch (error) {
              console.warn(error);
            } finally {
              setIsRecording(false);
            }
          }}
          style={{ width: '100%', height: 45 }}
        />
      )}
    </View>
  );
};
```

## Features

  - ...

<p>&nbsp;</p>

---

## Introduction

...

<p>&nbsp;</p>

---

## Installation

...

<p>&nbsp;</p>

---