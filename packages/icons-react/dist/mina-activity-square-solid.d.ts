import React from 'react';

export interface MinaActivitySquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaActivitySquareSolid: React.FC<MinaActivitySquareSolidProps>;
export default MinaActivitySquareSolid;
