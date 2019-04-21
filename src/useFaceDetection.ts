import { useState, useCallback } from 'react';

export const useFaceDetection = (state = []) => {
  const [faces, setFaces] = useState(state);

  const facesDetected = useCallback(({ faces }) => {
    setFaces(faces);
  }, []);

  return [
    faces,
    {setFaces, facesDetected}
  ]
}
