import React from 'react';

export interface LanBarcodeReadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarcodeReadThin: React.FC<LanBarcodeReadThinProps>;
export default LanBarcodeReadThin;
