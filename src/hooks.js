import { useState, useRef, useCallback, useMemo } from 'react';
import {
  useFlash,
  useWhiteBalance,
  useAutoFocus,
  useToggleFacing,
} from './toggle.ts';
import { initialCameraState } from './initialState.ts';
import { useZoom, useCameraState } from './misc';
import { takePicture } from './takePicture';
import { recordVideo } from './recordVideo';
import { stopRecording } from './stopRecording';
import { pausePreview, resumePreview } from './preview';

export const useCamera = (cameraOptions = initialCameraState) => {
  const cameraRef = useRef(null);
  const [type, toggleFacing] = useToggleFacing(cameraOptions.type, [
    'front',
    'back',
  ]);
  const [flash, { setFlash, toggleFlash }] = useFlash(cameraOptions.flash);
  const [whiteBalance, { setWhiteBalance, toggleWB }] = useWhiteBalance(
    cameraOptions.whiteBalance,
  );
  const [autoFocus, toggleAutoFocus] = useAutoFocus(cameraOptions.autoFocus, [
    'on',
    'off',
  ]);
  const [autoFocusPoint, { setAutoFocusPoint, touchToFocus }] = useAutoFocus(
    cameraOptions.autoFocusPoint,
  );
  const [focusDepth, setFocusDepth] = useState(cameraOptions.focusDepth);
  const [cameraState, { setCameraState, toggleCameraState }] = useCameraState(
    {},
  );
  const [textBlocks, setTextBlocks] = useState([]);
  const [faces, setFaces] = useState([]);
  const [barcodes, setBarcodes] = useState([]);
  const [ratio, setRatio] = useState(cameraOptions.ratio);
  const [isRecording, setIsRecording] = useState(false);

  const [zoom, { setZoom, zoomIn, zoomOut }] = useZoom(cameraOptions.zoom);

  const drawFocusRingPosition = useMemo(
    () => ({
      top: autoFocusPoint.drawRectPosition.y - 32,
      left: autoFocusPoint.drawRectPosition.x - 32,
    }),
    [autoFocusPoint],
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
      toggleFacing,
      toggleFlash,
      toggleWB,
      toggleAutoFocus,
      touchToFocus,
      zoomIn,
      zoomOut,
      setFocusDepth,
      toggleCameraState,
      takePicture,
      recordVideo,
      stopRecording,
      pausePreview,
      isRecording,
      resumePreview,
      setRatio,
      setIsRecording,
    },
  ];
};
