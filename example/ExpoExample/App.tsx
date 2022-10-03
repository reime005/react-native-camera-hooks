import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { useCamera } from 'react-native-camera-hooks';

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  const [{ cameraRef, type }, { toggleFacing, recordVideo }] = useCamera();

  useEffect(() => {
    const checkPerm = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasCameraPermission(status === 'granted');
    };

    checkPerm();
  }, [setHasCameraPermission]);

  if (hasCameraPermission === null) {
    return <View />;
  } else if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} ref={cameraRef} type={type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={toggleFacing}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                Flip
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.2,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={async () => {
                try {
                  const data = await recordVideo();
                  console.warn(data);
                } catch (e) {
                  console.warn(e);
                }
              }}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                Record
              </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}
