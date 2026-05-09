import React from 'react';

export interface MinaOneSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOneSquareSolid: React.FC<MinaOneSquareSolidProps>;
export default MinaOneSquareSolid;
