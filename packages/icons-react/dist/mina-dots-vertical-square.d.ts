import React from 'react';

export interface MinaDotsVerticalSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsVerticalSquare: React.FC<MinaDotsVerticalSquareProps>;
export default MinaDotsVerticalSquare;
