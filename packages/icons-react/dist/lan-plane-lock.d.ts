import React from 'react';

export interface LanPlaneLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneLock: React.FC<LanPlaneLockProps>;
export default LanPlaneLock;
