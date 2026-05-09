import React from 'react';

export interface MinaSignalSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSignalSquare: React.FC<MinaSignalSquareProps>;
export default MinaSignalSquare;
