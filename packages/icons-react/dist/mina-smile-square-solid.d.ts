import React from 'react';

export interface MinaSmileSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSmileSquareSolid: React.FC<MinaSmileSquareSolidProps>;
export default MinaSmileSquareSolid;
