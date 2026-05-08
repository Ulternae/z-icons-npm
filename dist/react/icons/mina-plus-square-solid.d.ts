import React from 'react';

export interface MinaPlusSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlusSquareSolid: React.FC<MinaPlusSquareSolidProps>;
export default MinaPlusSquareSolid;
