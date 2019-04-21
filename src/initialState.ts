import { Dimensions } from "react-native";
import { RNCamera } from "react-native-camera";

export const initialCameraState = {
  flash: RNCamera.Constants.FlashMode.on,
  zoom: 0,
  autoFocus: RNCamera.Constants.AutoFocus.on,
  autoFocusPoint: {
    normalized: { x: 0.5, y: 0.5 }, // normalized values required for autoFocusPointOfInterest
    drawRectPosition: {
      x: Dimensions.get('window').width * 0.5 - 32,
      y: Dimensions.get('window').height * 0.5 - 32,
    },
  },
  focusDepth: 0,
  type: RNCamera.Constants.Type.back,
  whiteBalance: RNCamera.Constants.WhiteBalance.auto,
  ratio: '16:9',
  
  isRecording: false,
  canDetectFaces: false,
  canDetectText: false,
  canDetectBarcode: false,
  faces: [],
  textBlocks: [],
  barcodes: [],
};
