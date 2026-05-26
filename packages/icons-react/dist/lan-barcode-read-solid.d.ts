import React from 'react';

export interface LanBarcodeReadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarcodeReadSolid: React.FC<LanBarcodeReadSolidProps>;
export default LanBarcodeReadSolid;
