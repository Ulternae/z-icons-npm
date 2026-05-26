import React from 'react';

export interface LanPenToSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenToSquare: React.FC<LanPenToSquareProps>;
export default LanPenToSquare;
