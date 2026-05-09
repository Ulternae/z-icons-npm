import React from 'react';

export interface MinaClockSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockSquare: React.FC<MinaClockSquareProps>;
export default MinaClockSquare;
