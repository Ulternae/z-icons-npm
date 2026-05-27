import React from 'react';

export interface CorePenToSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePenToSquare: React.FC<CorePenToSquareProps>;
export default CorePenToSquare;
