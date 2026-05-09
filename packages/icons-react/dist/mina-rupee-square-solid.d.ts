import React from 'react';

export interface MinaRupeeSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRupeeSquareSolid: React.FC<MinaRupeeSquareSolidProps>;
export default MinaRupeeSquareSolid;
