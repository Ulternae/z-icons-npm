import React from 'react';

export interface MinaHeartSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartSquare: React.FC<MinaHeartSquareProps>;
export default MinaHeartSquare;
