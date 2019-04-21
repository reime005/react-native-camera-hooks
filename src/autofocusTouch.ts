import { useState, useCallback } from 'react';
import { Dimensions } from 'react-native';

export const useAutoFocusTouch = (state = {}) => {
  const [autoFocusPoint, setAutoFocusPoint] = useState(state);

  const touchToFocus = useCallback(event => {
    const { pageX, pageY } = event.nativeEvent;
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const isPortrait = screenHeight > screenWidth;

    let x = pageX / screenWidth;
    let y = pageY / screenHeight;

    // Coordinate transform for portrait. See autoFocusPointOfInterest in docs for more info
    if (isPortrait) {
      x = pageY / screenHeight;
      y = -(pageX / screenWidth) + 1;
    }

    setAutoFocusPoint({
      normalized: { x, y },
      drawRectPosition: { x: pageX, y: pageY },
    });
  }, []);

  return [
    autoFocusPoint,
    {
      touchToFocus,
      setAutoFocusPoint,
    },
  ];
};
