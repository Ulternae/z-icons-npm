import React from 'react';

export interface LanPlaneTailSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneTailSolid: React.FC<LanPlaneTailSolidProps>;
export default LanPlaneTailSolid;
