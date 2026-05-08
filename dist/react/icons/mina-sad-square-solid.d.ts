import React from 'react';

export interface MinaSadSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSadSquareSolid: React.FC<MinaSadSquareSolidProps>;
export default MinaSadSquareSolid;
