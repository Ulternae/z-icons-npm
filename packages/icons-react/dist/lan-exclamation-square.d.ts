import React from 'react';

export interface LanExclamationSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExclamationSquare: React.FC<LanExclamationSquareProps>;
export default LanExclamationSquare;
