/* eslint-disable */

import { Component } from 'react';
import {
  KeysOfType,
  Omit,
  OptionalKeys,
  Overwrite,
  RequiredKeys,
} from 'typelevel-ts';
import { Param0, Param1 } from 'type-zoo';
import { RecordOptions } from './src/recordVideo';

interface UseCameraState {
  cameraRef: any,
  type: string,
  flash: string,
  whiteBalance: string,
  autoFocus: string,
  autoFocusPoint: {
    normalized: {
      x: number,
      y: number,
    },
    drawRectPosition?: {
      x: number,
      y: number,
    }
  },
  zoom: number,
  focusDepth: number,
  cameraState: string,
  drawFocusRingPosition: {},
  textBlocks: any[],
  faces: any[],
  barcodes: any[],
  ratio: string,
  isRecording: boolean
}

interface UseCameraStateAction {
  setFlash: () => void,
  setWhiteBalance: () => void,
  setZoom: () => void,
  setCameraState: () => void,
  setAutoFocusPoint: () => void,
  toggleFacing: () => void,
  toggleFlash: () => void,
  toggleWB: () => void,
  toggleAutoFocus: () => void,
  touchToFocus: () => void,
  zoomIn: () => void,
  zoomOut: () => void,
  setFocusDepth: () => void,
  toggleCameraState: () => void,
  takePicture: (options: any) => object,
  recordVideo: (options?: RecordOptions) => object,
  stopRecording: () => void,
  pausePreview: () => void,
  isRecording: () => boolean,
  resumePreview: () => void,
  setRatio: () => void,
  setIsRecording: () => void,
  barcodeRecognized: () => void,
  setBarcodes: (barcodes: any[]) => void,
  textRecognized: () => void,
  setTextBlocks: (textBlocks: any[]) => void,
  facesDetected: () => void,
  setFaces: (faces: any[]) => void,
}

export function useCamera(cameraOptions: Object): [UseCameraState, UseCameraStateAction];
