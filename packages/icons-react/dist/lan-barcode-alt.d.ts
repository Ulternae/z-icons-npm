import React from 'react';

export interface LanBarcodeAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarcodeAlt: React.FC<LanBarcodeAltProps>;
export default LanBarcodeAlt;
