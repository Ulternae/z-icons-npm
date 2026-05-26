import React from 'react';

export interface LanMinusSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMinusSquareSolid: React.FC<LanMinusSquareSolidProps>;
export default LanMinusSquareSolid;
