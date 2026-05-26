import React from 'react';

export interface LanSlidersVSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersVSquareSolid: React.FC<LanSlidersVSquareSolidProps>;
export default LanSlidersVSquareSolid;
