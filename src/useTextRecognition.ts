import { useState, useCallback } from 'react';

export const useTextRecognition = (state = []) => {
  const [textBlocks, setTextblocks] = useState(state);

  const textRecognized = useCallback(data => {
    setTextblocks(data.textBlocks);
  }, []);

  return [textBlocks, { textRecognized }];
};
