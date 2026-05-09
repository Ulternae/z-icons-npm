import React from 'react';

export interface MinaFiveSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFiveSquare: React.FC<MinaFiveSquareProps>;
export default MinaFiveSquare;
