import React from 'react';

export interface LanSlidersVSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersVSquare: React.FC<LanSlidersVSquareProps>;
export default LanSlidersVSquare;
