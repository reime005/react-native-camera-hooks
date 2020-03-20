export interface RecordResponse {
  uri: string;
  videoOrientation: number;
  deviceOrientation: number;
  isRecordingInterrupted: boolean;
  codec: string;
}

export interface RecordOptions {
  quality?: string;
  orientation?: number | string;
  maxDuration?: number;
  maxFileSize?: number;
  mute?: boolean;
  mirrorVideo?: boolean;
  path?: string;
  videoBitrate?: number;
  codec?: string;
}

export const defaultVideoRecordOptions: RecordOptions = {
  quality: '720p',
  orientation: 'auto',
  maxDuration: 5,
  mute: false,
  mirrorVideo: false,
  videoBitrate: 5000000,
};

export const recordVideo = async (
  { cameraRef }: { cameraRef: any },
  options: RecordOptions = defaultVideoRecordOptions
): Promise<RecordResponse | undefined> => {
  if (cameraRef && cameraRef.recordAsync) {
    return cameraRef.recordAsync(options);
  } else if (cameraRef && cameraRef.current && cameraRef.current.recordAsync) {
    return cameraRef.current.recordAsync(options);
  }
};
