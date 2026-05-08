import React from 'react';

export interface MinaZeroSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZeroSquareSolid: React.FC<MinaZeroSquareSolidProps>;
export default MinaZeroSquareSolid;
