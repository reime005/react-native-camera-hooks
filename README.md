<p>&nbsp;</p>
<p align="center">
  <img src="logo.png" width="350" title="hover text">
  <p align='center'>Hooks for React Native Camera</p>
</p>
<p>&nbsp;</p>

<p>

React Native Camera Hooks provides you with functionality to use the React Native Camera API with Functional Components. 

</p>

<p>&nbsp;</p>

[![npm](https://img.shields.io/npm/v/react-native-camera-hooks.svg?style=flat-square)](http://npm.im/react-native-camera-hooks)
![GitHub](https://img.shields.io/github/license/reime005/react-native-camera-hooks.svg?style=flat-square)
[![CircleCI](https://circleci.com/gh/reime005/react-native-camera-hooks.svg?style=svg)](https://circleci.com/gh/reime005/react-native-camera-hooks)
![Deploy](https://github.com/reime005/react-native-camera-hooks/workflows/Deploy/badge.svg)

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

  - React Hooks Support: Use React Native Camera with Functional Components
  - Wrapper around the Camera API, that makes the usage easier
  - TypeScript support

Constants are defined in [constants](./src/constants.ts) and [initalState](./src/initialState.ts).

|Function|Description|
|---|---|
|`useCamera(initialState)`|Includes all camera hooks described below. See also the example above|
|`useZoom(state)`|Zoom feature. Includes `zoom`, `setZoom`, `zoomIn` (increment by 0.01) and `zoomOut` (decrement by 0.1) |
|`useToggleFacing(state, modes)`|Toggles between two values (front and back side of the camera). Includes `type`, `toggleFacing`.|
|`useAutoFocus(state, modes)`|Toggles between two values (focus on or off). Includes `autoFocus` and `toggleAutoFocus`.|
|`useWhiteBalance(state)`|Toggles between white balance values. Includes `whiteBalance`, `toggleWB` and `setWhiteBalance`.|
|`useFlash(state)`|Toggles between flash modes. Includes `flash`, `toggleFlash` and `setFlash`.|
|`useAutoFocusTouch(state)`|Touch to focus feature. Includes `autoFocusPoint`, `touchToFocus` (callback to be used in `onPress` for example) and `setAutoFocusPoint`.|
|`useTextRecognition(state)`|Text recognition feature. Includes `textBlocks`, `setTextblocks` and `textRecognized` (callback).|
|`useFaceDetection(state)`|Face detection feature. Includes `faces`, `setFaces` and `facesDetected` (callback).|
|`useBarcodeDetection(state)`|Barcode detection feature. Includes `barcodes`, `setBarcodes` and `barcodeRecognized` (callback).|
|`takePicture({ cameraRef }, options)`|Function to take a picture. Returns a Promise with the result. `defaultPictureTakeOptions` can also be imported from the same file.|
|`recordVideo({ cameraRef }, options)`|Function to record a video. Returns a Promise with the result. `defaultVideoRecordOptions` can also be imported from the same file.|
|`stopRecording({ cameraRef })`|Function to stop recording. Returns a Promise.|
|`pausePreview({ cameraRef })`|Function to pause the camera preview. Returns a Promise with the result as a boolean.|
|`resumePreview({ cameraRef })`|Function to resume the camera preview. Returns a Promise with the result as a boolean.|

<p>&nbsp;</p>

---

## Installation

To install react-native-camera-hooks, do either

```bash
npm install --save react-native-camera-hooks
```

or

```bash
yarn add react-native-camera-hooks
```

Note that this requires a react-native version > 0.59 which supports React Hooks. Also, react-native-camera has to be installed.

<p>&nbsp;</p>

---

## TODO

* Improve TypeScript support
