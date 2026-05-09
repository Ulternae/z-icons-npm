import React from 'react';

export interface MinaEuroSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEuroSquareSolid: React.FC<MinaEuroSquareSolidProps>;
export default MinaEuroSquareSolid;
