import React from 'react';

export interface MinaRewindSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRewindSquare: React.FC<MinaRewindSquareProps>;
export default MinaRewindSquare;
