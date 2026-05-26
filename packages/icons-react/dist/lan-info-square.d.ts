import React from 'react';

export interface LanInfoSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInfoSquare: React.FC<LanInfoSquareProps>;
export default LanInfoSquare;
