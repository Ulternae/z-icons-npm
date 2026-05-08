import React from 'react';

export interface MinaSixSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSixSquareSolid: React.FC<MinaSixSquareSolidProps>;
export default MinaSixSquareSolid;
