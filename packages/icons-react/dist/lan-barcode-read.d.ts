import React from 'react';

export interface LanBarcodeReadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarcodeRead: React.FC<LanBarcodeReadProps>;
export default LanBarcodeRead;
