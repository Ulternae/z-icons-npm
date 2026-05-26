import React from 'react';

export interface LanHeartSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartSquare: React.FC<LanHeartSquareProps>;
export default LanHeartSquare;
