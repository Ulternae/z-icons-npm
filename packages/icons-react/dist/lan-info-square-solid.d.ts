import React from 'react';

export interface LanInfoSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInfoSquareSolid: React.FC<LanInfoSquareSolidProps>;
export default LanInfoSquareSolid;
