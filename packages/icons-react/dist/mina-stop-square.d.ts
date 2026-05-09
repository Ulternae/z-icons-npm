import React from 'react';

export interface MinaStopSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStopSquare: React.FC<MinaStopSquareProps>;
export default MinaStopSquare;
