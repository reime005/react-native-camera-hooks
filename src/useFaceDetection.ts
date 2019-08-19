import { useState, useCallback } from 'react';

export const useFaceDetection = (state = []) => {
  const [faces, setFaces] = useState(state);

  const facesDetected = useCallback(data => {
    setFaces(data.faces);
  }, []);

  return [faces, { facesDetected }];
};
