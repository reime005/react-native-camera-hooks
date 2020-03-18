import { useState } from 'react';

export const useZoom = (state = 0) => {
  const [zoom, setZoom] = useState(state);

  const zoomIn = () => {
    if (zoom + 0.01 <= 1 && zoom + 0.01 >= 0) {
      setZoom(zoom + 0.01);
    }
  };

  const zoomOut = () => {
    if (zoom - 0.1 <= 1 && zoom - 0.1 >= 0) {
      setZoom(zoom - 0.1);
    }
  };

  return [
    zoom,
    {
      setZoom,
      zoomIn,
      zoomOut,
    },
  ];
};

export const useCameraState = (state = {}) => {
  const [cameraState, setCameraState] = useState(state);

  const toggleCameraState = newCameraState => {
    setCameraState({ [newCameraState]: !cameraState[newCameraState] });
  };

  return [
    cameraState,
    {
      toggleCameraState,
      setCameraState,
    },
  ];
};
