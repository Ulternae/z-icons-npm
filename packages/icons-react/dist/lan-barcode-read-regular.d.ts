import React from 'react';

export interface LanBarcodeReadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarcodeReadRegular: React.FC<LanBarcodeReadRegularProps>;
export default LanBarcodeReadRegular;
