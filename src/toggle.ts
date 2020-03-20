import { useState } from 'react';
import { flashModeOrder, wbOrder } from './constants';

const useToggle = (initialState = '', values = []) => {
  const [state, setState] = useState(initialState);

  return [
    state,
    () =>
      setState(
        !values
          ? _state => !_state
          : state === values[0]
          ? values[1]
          : values[0]
      ),
  ];
};

export const useFlash = (state = '') => {
  const [flash, setFlash] = useState<string>(state);

  const toggleFlash = () => {
    setFlash(flashModeOrder[flash]);
  };

  return [
    flash,
    {
      toggleFlash,
      setFlash,
    },
  ];
};

export const useWhiteBalance = (state = '') => {
  const [whiteBalance, setWhiteBalance] = useState<string>(state);

  const toggleWB = () => {
    Object.keys(wbOrder).indexOf(whiteBalance);
    setWhiteBalance(wbOrder[whiteBalance]);
  };

  return [
    whiteBalance,
    {
      toggleWB,
      setWhiteBalance,
    },
  ];
};

export const useAutoFocus = (state = '', toggleModes) => {
  const [autoFocus, toggleAutoFocus] = useToggle(state, toggleModes);

  return [autoFocus, toggleAutoFocus];
};

export const useToggleFacing = (state = '', toggleModes) => {
  const [type, toggleFacing] = useToggle(state, toggleModes);

  return [type, toggleFacing];
};
