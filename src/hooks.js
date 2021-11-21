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
import { stopRecording as _stopRecording } from './stopRecording';
import { pausePreview, resumePreview } from './preview';
import { useAutoFocusTouch } from './autofocusTouch';
import { useTextRecognition } from './useTextRecognition';
import { useFaceDetection } from './useFaceDetection';
import { useBarcodeDetection } from './useBarcodeDetection';

export const useCamera = (cameraOptions = initialCameraState) => {
  const mergedCameraOptions = {
    ...initialCameraState,
    ...cameraOptions,
  };
  const cameraRef = useRef(null);
  const [type, toggleFacing] = useToggleFacing(mergedCameraOptions.type, [
    'front',
    'back',
  ]);
  const [flash, { setFlash, toggleFlash }] = useFlash(
    mergedCameraOptions.flash
  );
  const [whiteBalance, { setWhiteBalance, toggleWB }] = useWhiteBalance(
    mergedCameraOptions.whiteBalance
  );
  const [
    autoFocus,
    toggleAutoFocus,
  ] = useAutoFocus(mergedCameraOptions.autoFocus, ['on', 'off']);
  const [
    autoFocusPoint,
    { setAutoFocusPoint, touchToFocus },
  ] = useAutoFocusTouch(mergedCameraOptions.autoFocusPoint);
  const [focusDepth, setFocusDepth] = useState(mergedCameraOptions.focusDepth);
  const [cameraState, { setCameraState, toggleCameraState }] = useCameraState(
    {}
  );
  const [textBlocks, { textRecognized }] = useTextRecognition([]);
  const [faces, { facesDetected }] = useFaceDetection([]);
  const [barcodes, { barcodeRecognized }] = useBarcodeDetection([]);
  const [ratio, setRatio] = useState(mergedCameraOptions.ratio);
  const [isRecording, setIsRecording] = useState(false);

  const [zoom, { setZoom, zoomIn, zoomOut }] = useZoom(
    mergedCameraOptions.zoom
  );

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
      takePicture: (options) => _takePicture({ cameraRef }, options),
      recordVideo: (options) => _recordVideo({ cameraRef }, options),
      stopRecording: () => _stopRecording({ cameraRef }),
      pausePreview,
      isRecording,
      resumePreview,
      setRatio,
      setIsRecording,
      barcodeRecognized,
      textRecognized,
      facesDetected,
    },
  ];
};
