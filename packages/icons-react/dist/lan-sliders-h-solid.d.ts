import React from 'react';

export interface LanSlidersHSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersHSolid: React.FC<LanSlidersHSolidProps>;
export default LanSlidersHSolid;
