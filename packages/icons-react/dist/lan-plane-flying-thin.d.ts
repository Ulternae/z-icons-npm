import React from 'react';

export interface LanPlaneFlyingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneFlyingThin: React.FC<LanPlaneFlyingThinProps>;
export default LanPlaneFlyingThin;
