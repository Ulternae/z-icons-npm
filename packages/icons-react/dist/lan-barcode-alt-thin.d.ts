import React from 'react';

export interface LanBarcodeAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarcodeAltThin: React.FC<LanBarcodeAltThinProps>;
export default LanBarcodeAltThin;
