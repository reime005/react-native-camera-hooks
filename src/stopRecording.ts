export const stopRecording = async ({
  cameraRef,
}: {
  cameraRef: any;
}): Promise<any> => {
  if (cameraRef && cameraRef.stopRecording) {
    return cameraRef.stopRecording();
  } else if (
    cameraRef &&
    cameraRef.current &&
    cameraRef.current.stopRecording
  ) {
    return cameraRef.current.stopRecording();
  }
};
