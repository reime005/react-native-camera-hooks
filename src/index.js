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
};
