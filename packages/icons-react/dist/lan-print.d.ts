import React from 'react';

export interface LanPrintProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrint: React.FC<LanPrintProps>;
export default LanPrint;
