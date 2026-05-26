import React from 'react';

export interface LanPlaneLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneLockThin: React.FC<LanPlaneLockThinProps>;
export default LanPlaneLockThin;
