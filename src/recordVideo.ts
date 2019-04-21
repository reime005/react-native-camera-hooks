import { RNCamera, RecordResponse, RecordOptions } from 'react-native-camera';

export const defaultVideoRecordOptions: RecordOptions = {
  quality: RNCamera.Constants.VideoQuality && RNCamera.Constants.VideoQuality['288p'],
  orientation: RNCamera.Constants.Orientation.auto,
  maxDuration: 5,
  // maxFileSize: 5,
  mute: false,
  mirrorVideo: false,
  // path: '',
  videoBitrate: 5000000,
  // codec: RNCamera.Constants.VideoCodec['H264']
};

export const recordVideo = async (
  { cameraRef }: { cameraRef: any },
  options: RecordOptions = defaultVideoRecordOptions,
): Promise<RecordResponse> => {
  if (cameraRef && cameraRef.recordAsync) {
    return await cameraRef.recordAsync(options);
  } else if (cameraRef && cameraRef.current && cameraRef.current.recordAsync) {
    return await cameraRef.current.recordAsync(options);
  }
};
