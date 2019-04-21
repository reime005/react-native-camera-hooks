export const pausePreview = async (
  { cameraRef }: { cameraRef: any },
): Promise<void> => {
  if (cameraRef && cameraRef.pausePreview) {
    return await cameraRef.pausePreview();
  } else if (cameraRef && cameraRef.current && cameraRef.current.pausePreview) {
    return await cameraRef.current.pausePreview();
  }
};

export const resumePreview = async (
  { cameraRef }: { cameraRef: any },
): Promise<void> => {
  if (cameraRef && cameraRef.resumePreview) {
    return await cameraRef.resumePreview();
  } else if (cameraRef && cameraRef.current && cameraRef.current.resumePreview) {
    return await cameraRef.current.resumePreview();
  }
};
