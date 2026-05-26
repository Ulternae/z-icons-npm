import React from 'react';

export interface LanUsdSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsdSquare: React.FC<LanUsdSquareProps>;
export default LanUsdSquare;
