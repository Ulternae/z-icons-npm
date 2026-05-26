import React from 'react';

export interface LanSlidersHSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersHSquareSolid: React.FC<LanSlidersHSquareSolidProps>;
export default LanSlidersHSquareSolid;
