import { Dimensions } from 'react-native';

export interface CameraOptions {
  flash?: string | number;
  zoom?: number;
  autoFocus?: string | boolean | number;
  autoFocusPoint?: {
    normalized: {
      x: number;
      y: number;
    };
    drawRectPosition: {
      x: number;
      y: number;
    };
  };
  focusDepth?: number;
  type?: string | number;
  whiteBalance?: number | string;
  ratio?: string;
  isRecording?: boolean;
  canDetectFaces?: boolean;
  canDetectText?: boolean;
  canDetectBarcode?: boolean;
  faces?: any[];
  textBlocks?: any[];
  barcodes?: any[];
}

export const initialCameraState: CameraOptions = {
  flash: 'on',
  zoom: 0,
  autoFocus: 'on',
  autoFocusPoint: {
    normalized: { x: 0.5, y: 0.5 }, // normalized values required for autoFocusPointOfInterest
    drawRectPosition: {
      x: Dimensions.get('window').width * 0.5 - 32,
      y: Dimensions.get('window').height * 0.5 - 32,
    },
  },
  focusDepth: 0,
  type: 'back',
  whiteBalance: 'auto',
  ratio: '16:9',

  isRecording: false,
  canDetectFaces: false,
  canDetectText: false,
  canDetectBarcode: false,
  faces: [],
  textBlocks: [],
  barcodes: [],
};
