import React from 'react';

export interface MinaYenSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaYenSquare: React.FC<MinaYenSquareProps>;
export default MinaYenSquare;
