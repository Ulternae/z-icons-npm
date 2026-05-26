import React from 'react';

export interface LanPlaneLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneLockRegular: React.FC<LanPlaneLockRegularProps>;
export default LanPlaneLockRegular;
