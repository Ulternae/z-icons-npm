import React from 'react';

export interface LanMinusSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMinusSquare: React.FC<LanMinusSquareProps>;
export default LanMinusSquare;
