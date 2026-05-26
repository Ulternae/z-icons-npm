import React from 'react';

export interface LanPrintRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrintRegular: React.FC<LanPrintRegularProps>;
export default LanPrintRegular;
