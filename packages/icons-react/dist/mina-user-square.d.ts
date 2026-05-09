import React from 'react';

export interface MinaUserSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserSquare: React.FC<MinaUserSquareProps>;
export default MinaUserSquare;
