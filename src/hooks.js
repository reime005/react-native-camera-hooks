import { useState, useRef } from 'react';

const useToggle = (initialState = false, values = []) => {
  const [state, setState] = useState(initialState);

  return [
    state,
    () =>
      setState(
        !values
          ? _state => !_state
          : state === values[0]
          ? values[1]
          : values[0],
      ),
  ];
};

export const useCamera = (cameraOptions = {}) => {
  const cameraRef = useRef(null);
  const [type, toggleFacing] = useToggle(cameraOptions.type, ['front', 'back']);
  const [flash, setFlash] = useState(cameraOptions.flash);
  const [whiteBalance, setWhiteBalance] = useState(cameraOptions.whiteBalance);
  const [autoFocus, toggleAutoFocus] = useToggle(cameraOptions.autoFocus, [
    'on',
    'off',
  ]);
  const [autoFocusPoint, setAutoFocusPoint] = useState(
    cameraOptions.autoFocusPoint,
  );
  const [focusDepth, setFocusDepth] = useState(cameraOptions.focusDepth);
  const [cameraState, setCameraState] = useState({});
  const [textBlocks, setTextBlocks] = useState([]);
  const [faces, setFaces] = useState([]);
  const [barcodes, setBarcodes] = useState([]);
  const [ratio, setRatio] = useState(cameraOptions.ratio);
  const [isRecording, setIsRecording] = useState(false);

  const [zoom, setZoom] = useState(cameraOptions.zoom);

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

  const toggleFlash = () => {
    setFlash(flashModeOrder[flash]);
  };

  const toggleWB = () => {
    setWhiteBalance(wbOrder[whiteBalance]);
  };

  const _takePicture = (options = {}) =>
    cameraRef.current.takePictureAsync(options);

  const _takeVideo = (options = {}) => cameraRef.current.recordAsync(options);

  const stopRecording = () => cameraRef.current.stopRecording();

  const pausePreview = () => cameraRef.current.pausePreview();

  const _isRecording = () => cameraRef.current.isRecording();

  const resumePreview = () => cameraRef.current.resumePreview();

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

  const toggleCameraState = newCameraState => {
    setCameraState({ [newCameraState]: !cameraState[newCameraState] });
  };

  const drawFocusRingPosition = useMemo(
    () => ({
      top: autoFocusPoint.drawRectPosition.y - 32,
      left: autoFocusPoint.drawRectPosition.x - 32,
    }),
    [autoFocusPoint],
  );

  const textRecognized = useCallback(object => {
    const { textBlocks } = object;
    setTextBlocks(textBlocks);
  }, []);

  const facesDetected = useCallback(({ faces }) => {
    setFaces(faces);
  }, []);

  const barcodeRecognized = useCallback(
    ({ barcodes }) => setBarcodes(barcodes),
    [],
  );

  return [
    {
      cameraRef,
      type,
      flash,
      whiteBalance,
      autoFocus,
      autoFocusPoint,
      zoom,
      focusDepth,
      cameraState,
      drawFocusRingPosition,
      textBlocks,
      faces,
      barcodes,
      ratio,
      isRecording,
    },
    {
      toggleFacing,
      toggleFlash,
      toggleWB,
      toggleAutoFocus,
      touchToFocus,
      zoomIn,
      zoomOut,
      setFocusDepth,
      toggleCameraState,
      textRecognized,
      facesDetected,
      _takePicture,
      _takeVideo,
      stopRecording,
      pausePreview,
      _isRecording,
      resumePreview,
      barcodeRecognized,
      setRatio,
      setIsRecording,
    },
  ];
};
