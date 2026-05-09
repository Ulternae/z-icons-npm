import React from 'react';

export interface MinaLockSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockSquare: React.FC<MinaLockSquareProps>;
export default MinaLockSquare;
