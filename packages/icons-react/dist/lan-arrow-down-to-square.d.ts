import React from 'react';

export interface LanArrowDownToSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowDownToSquare: React.FC<LanArrowDownToSquareProps>;
export default LanArrowDownToSquare;
