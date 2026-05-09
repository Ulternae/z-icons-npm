import React from 'react';

export interface MinaFunnySquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFunnySquareSolid: React.FC<MinaFunnySquareSolidProps>;
export default MinaFunnySquareSolid;
