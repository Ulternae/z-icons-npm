import React from 'react';

export interface MinaPlaySquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlaySquareSolid: React.FC<MinaPlaySquareSolidProps>;
export default MinaPlaySquareSolid;
