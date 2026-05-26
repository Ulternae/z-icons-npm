import React from 'react';

export interface LanBarcodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarcode: React.FC<LanBarcodeProps>;
export default LanBarcode;
