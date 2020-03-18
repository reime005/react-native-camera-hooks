export interface TakePictureResponse {
  width: number;
  height: number;
  uri: string;
  base64?: string;
  exif?: { [name: string]: any };
  pictureOrientation: number;
  deviceOrientation: number;
}

export interface TakePictureOptions {
  quality?: number;
  orientation?: number | string;
  base64?: boolean;
  exif?: boolean;
  width?: number;
  mirrorImage?: boolean;
  doNotSave?: boolean;
  pauseAfterCapture?: boolean;
  skipProcessing?: boolean;
  fixOrientation?: boolean;
  forceUpOrientation?: boolean;
}

export const defaultPictureTakeOptions: TakePictureOptions = {
  quality: 0.8,
  width: undefined,
  base64: false,
  doNotSave: false,
  exif: true,
  forceUpOrientation: true,
  fixOrientation: true,
  orientation: 'portrait',
};

export const takePicture = async (
  { cameraRef }: { cameraRef: any },
  options: TakePictureOptions = defaultPictureTakeOptions
): Promise<TakePictureResponse | undefined> => {
  if (cameraRef && cameraRef.takePictureAsync) {
    return cameraRef.takePictureAsync(options);
  } else if (
    cameraRef &&
    cameraRef.current &&
    cameraRef.current.takePictureAsync
  ) {
    return cameraRef.current.takePictureAsync(options);
  }
};
