import React from 'react';

export interface LanBarcodeAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarcodeAltRegular: React.FC<LanBarcodeAltRegularProps>;
export default LanBarcodeAltRegular;
