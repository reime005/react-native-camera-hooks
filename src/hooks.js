/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useRef, useMemo } from 'react';
import {
  useFlash,
  useWhiteBalance,
  useAutoFocus,
  useToggleFacing,
} from './toggle.ts';
import { initialCameraState } from './initialState.ts';
import { useZoom, useCameraState } from './misc';
import { takePicture as _takePicture } from './takePicture';
import { recordVideo as _recordVideo } from './recordVideo';
import { stopRecording } from './stopRecording';
import { pausePreview, resumePreview } from './preview';
import { useAutoFocusTouch } from './autofocusTouch';
import { useTextRecognition } from './useTextRecognition';
import { useFaceDetection } from './useFaceDetection';
import { useBarcodeDetection } from './useBarcodeDetection';

export const useCamera = (cameraOptions = initialCameraState) => {
  const cameraRef = useRef(null);
  const [type, toggleFacing] = useToggleFacing(cameraOptions.type, [
    'front',
    'back',
  ]);
  const [flash, { setFlash, toggleFlash }] = useFlash(cameraOptions.flash);
  const [whiteBalance, { setWhiteBalance, toggleWB }] = useWhiteBalance(
    cameraOptions.whiteBalance
  );
  const [autoFocus, toggleAutoFocus] = useAutoFocus(cameraOptions.autoFocus, [
    'on',
    'off',
  ]);
  const [
    autoFocusPoint,
    { setAutoFocusPoint, touchToFocus },
  ] = useAutoFocusTouch(cameraOptions.autoFocusPoint);
  const [focusDepth, setFocusDepth] = useState(cameraOptions.focusDepth);
  const [cameraState, { setCameraState, toggleCameraState }] = useCameraState(
    {}
  );
  const [textBlocks, { setTextBlocks, textRecognized }] = useTextRecognition(
    []
  );
  const [faces, { setFaces, facesDetected }] = useFaceDetection([]);
  const [barcodes, { setBarcodes, barcodeRecognized }] = useBarcodeDetection(
    []
  );
  const [ratio, setRatio] = useState(cameraOptions.ratio);
  const [isRecording, setIsRecording] = useState(false);

  const [zoom, { setZoom, zoomIn, zoomOut }] = useZoom(cameraOptions.zoom);

  const drawFocusRingPosition = useMemo(
    () => ({
      top: autoFocusPoint.drawRectPosition.y - 32,
      left: autoFocusPoint.drawRectPosition.x - 32,
    }),
    [autoFocusPoint]
  );

  return [
    {
      cameraRef,
      type,
      flash,
      whiteBalance,
      autoFocus,
      autoFocusPoint,
      zoom,
      focusDepth,
      cameraState,
      drawFocusRingPosition,
      textBlocks,
      faces,
      barcodes,
      ratio,
      isRecording,
    },
    {
      setFlash,
      setWhiteBalance,
      setZoom,
      setCameraState,
      setAutoFocusPoint,
      toggleFacing,
      toggleFlash,
      toggleWB,
      toggleAutoFocus,
      touchToFocus,
      zoomIn,
      zoomOut,
      setFocusDepth,
      toggleCameraState,
      takePicture: options => _takePicture({ cameraRef }, options),
      recordVideo: options => _recordVideo({ cameraRef }, options),
      stopRecording,
      pausePreview,
      isRecording,
      resumePreview,
      setRatio,
      setIsRecording,
      barcodeRecognized,
      setBarcodes,
      textRecognized,
      setTextBlocks,
      facesDetected,
      setFaces,
    },
  ];
};
