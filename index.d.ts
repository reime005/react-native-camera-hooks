/* eslint-disable */

import { Component } from 'react';
import {
  KeysOfType,
  Omit,
  OptionalKeys,
  Overwrite,
  RequiredKeys,
} from 'typelevel-ts';
import { RecordOptions, RecordResponse } from './src/recordVideo';
import { CameraOptions } from './src/initialState';
import { TakePictureOptions, TakePictureResponse } from './src/takePicture';

interface UseCameraState {
  cameraRef: any,
  type: 'front' | 'back',
  flash: string | number,
  whiteBalance: string | number,
  autoFocus: string | number,
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
  setFlash: (flash: string | number) => void,
  setWhiteBalance: (whiteBalance: number | string) => void,
  setZoom: (zoom: number) => void,
  setCameraState: () => void,
  setAutoFocusPoint: () => void,
  toggleFacing: () => void,
  toggleFlash: () => void,
  toggleWB: () => void,
  toggleAutoFocus: () => void,
  touchToFocus: () => void,
  zoomIn: () => void,
  zoomOut: () => void,
  setFocusDepth: (focusDepth: number) => void,
  toggleCameraState: () => void,
  takePicture: (options?: TakePictureOptions) => Promise<TakePictureResponse>,
  recordVideo: (options?: RecordOptions) => Promise<RecordResponse>,
  stopRecording: () => Promise<any>,
  pausePreview: () => Promise<boolean>,
  isRecording: () => Promise<boolean>,
  resumePreview: () => Promise<boolean>,
  setRatio: (ratio: string) => void,
  setIsRecording: (isRecording: boolean) => void,
  barcodeRecognized: (data: any) => void,
  textRecognized: (data: any) => void,
  facesDetected: (data: any) => void,
}

export function useCamera(cameraOptions?: CameraOptions): [UseCameraState, UseCameraStateAction];
