import React from 'react';

export interface MinaEightSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEightSquareSolid: React.FC<MinaEightSquareSolidProps>;
export default MinaEightSquareSolid;
