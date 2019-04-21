import { useState, useCallback } from 'react';

export const useBarcodeDetection = (state = []) => {
  const [barcodes, setBarcodes] = useState(state);

  const barcodeRecognized = useCallback(({ barcodes }) => {
    setBarcodes(barcodes);
  }, []);

  return [
    barcodes,
    {setBarcodes, barcodeRecognized}
  ]
}
