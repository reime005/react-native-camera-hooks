import { useCamera } from './hooks';
import {
  useAutoFocus,
  useWhiteBalance,
  useToggleFacing,
  useFlash,
} from './toggle';
import { recordVideo } from './recordVideo';
import { takePicture } from './takePicture';
import { useZoom, useCameraState } from './misc';
import { initialCameraState } from './initialState';
import { useAutoFocusTouch } from './autofocusTouch';
import { stopRecording } from './stopRecording';
import { pausePreview, resumePreview } from './preview';
import { useBarcodeDetection } from './useBarcodeDetection';
import { useFaceDetection } from './useFaceDetection';
import { useTextRecognition } from './useTextRecognition';

export {
  initialCameraState,
  useCamera,
  useFlash,
  useToggleFacing,
  useAutoFocus,
  useWhiteBalance,
  recordVideo,
  takePicture,
  useZoom,
  useCameraState,
  useAutoFocusTouch,
  stopRecording,
  pausePreview,
  resumePreview,
  useBarcodeDetection,
  useFaceDetection,
  useTextRecognition,
};
