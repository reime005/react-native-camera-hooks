import {
  RNCamera,
  TakePictureOptions,
  TakePictureResponse,
} from 'react-native-camera';

export const defaultPictureTakeOptions: TakePictureOptions = {
  quality: 0.8,
  width: undefined,
  base64: false,
  doNotSave: false,
  exif: true,
  forceUpOrientation: true,
  fixOrientation: true,
  orientation: RNCamera.Constants.Orientation.portrait,
};

export const takePicture = async (
  { cameraRef }: { cameraRef: any },
  options: TakePictureOptions = defaultPictureTakeOptions,
): Promise<TakePictureResponse> => {
  if (cameraRef && cameraRef.takePictureAsync) {
    return await cameraRef.takePictureAsync(options);
  } else if (
    cameraRef &&
    cameraRef.current &&
    cameraRef.current.takePictureAsync
  ) {
    return await cameraRef.current.takePictureAsync(options);
  }
};
