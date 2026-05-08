import React from 'react';

export interface MinaMinusSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinusSquareSolid: React.FC<MinaMinusSquareSolidProps>;
export default MinaMinusSquareSolid;
