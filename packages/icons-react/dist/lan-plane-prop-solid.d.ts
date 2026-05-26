import React from 'react';

export interface LanPlanePropSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlanePropSolid: React.FC<LanPlanePropSolidProps>;
export default LanPlanePropSolid;
