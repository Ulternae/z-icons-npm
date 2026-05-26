import React from 'react';

export interface LanEggFriedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEggFriedSolid: React.FC<LanEggFriedSolidProps>;
export default LanEggFriedSolid;
