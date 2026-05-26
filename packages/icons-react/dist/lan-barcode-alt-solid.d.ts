import React from 'react';

export interface LanBarcodeAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarcodeAltSolid: React.FC<LanBarcodeAltSolidProps>;
export default LanBarcodeAltSolid;
