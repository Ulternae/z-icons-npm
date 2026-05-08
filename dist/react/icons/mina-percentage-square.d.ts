import React from 'react';

export interface MinaPercentageSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPercentageSquare: React.FC<MinaPercentageSquareProps>;
export default MinaPercentageSquare;
