import React from 'react';

export interface LanPlusSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlusSquare: React.FC<LanPlusSquareProps>;
export default LanPlusSquare;
