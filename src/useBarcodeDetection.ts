import { useState, useCallback } from 'react';

export const useBarcodeDetection = (state = []) => {
  const [barcodes, setBarcodes] = useState(state);

  const barcodeRecognized = useCallback(
    data => {
      setBarcodes(data.barcodes);
    },
    [setBarcodes]
  );

  return [barcodes, { barcodeRecognized }];
};
