import React from 'react';

export interface CoreStarHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreStarHalfSolid: React.FC<CoreStarHalfSolidProps>;
export default CoreStarHalfSolid;
