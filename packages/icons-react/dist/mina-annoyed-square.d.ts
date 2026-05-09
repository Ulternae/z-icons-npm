import React from 'react';

export interface MinaAnnoyedSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAnnoyedSquare: React.FC<MinaAnnoyedSquareProps>;
export default MinaAnnoyedSquare;
