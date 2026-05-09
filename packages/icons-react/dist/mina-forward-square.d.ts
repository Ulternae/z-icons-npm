import React from 'react';

export interface MinaForwardSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaForwardSquare: React.FC<MinaForwardSquareProps>;
export default MinaForwardSquare;
