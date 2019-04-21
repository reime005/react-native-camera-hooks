import { useState, useCallback } from 'react';

export const useTextRecognition = (state = []) => {
  const [textBlocks, setTextblocks] = useState(state);

  const textRecognized = useCallback(({ textBlocks }) => {
    setTextblocks(textBlocks);
  }, []);

  return [
    textBlocks,
    {setTextblocks, textRecognized}
  ]
}
