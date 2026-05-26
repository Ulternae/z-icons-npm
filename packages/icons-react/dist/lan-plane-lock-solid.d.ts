import React from 'react';

export interface LanPlaneLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneLockSolid: React.FC<LanPlaneLockSolidProps>;
export default LanPlaneLockSolid;
