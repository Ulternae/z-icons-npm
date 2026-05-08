import React from 'react';

export interface MinaInfoSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfoSquareSolid: React.FC<MinaInfoSquareSolidProps>;
export default MinaInfoSquareSolid;
