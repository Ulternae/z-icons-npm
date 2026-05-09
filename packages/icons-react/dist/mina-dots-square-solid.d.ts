import React from 'react';

export interface MinaDotsSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsSquareSolid: React.FC<MinaDotsSquareSolidProps>;
export default MinaDotsSquareSolid;
