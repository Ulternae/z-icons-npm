import React from 'react';

export interface LanSlidersHSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersHSquare: React.FC<LanSlidersHSquareProps>;
export default LanSlidersHSquare;
