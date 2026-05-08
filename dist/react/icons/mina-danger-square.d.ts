import React from 'react';

export interface MinaDangerSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDangerSquare: React.FC<MinaDangerSquareProps>;
export default MinaDangerSquare;
