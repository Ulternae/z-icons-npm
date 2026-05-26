import React from 'react';

export interface LanPrintSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrintSolid: React.FC<LanPrintSolidProps>;
export default LanPrintSolid;
