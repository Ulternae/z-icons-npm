import React from 'react';

export interface LanBarcodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarcodeRegular: React.FC<LanBarcodeRegularProps>;
export default LanBarcodeRegular;
