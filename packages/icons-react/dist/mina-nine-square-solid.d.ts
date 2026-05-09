import React from 'react';

export interface MinaNineSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNineSquareSolid: React.FC<MinaNineSquareSolidProps>;
export default MinaNineSquareSolid;
