import React from 'react';

export interface CoreSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSquare: React.FC<CoreSquareProps>;
export default CoreSquare;
