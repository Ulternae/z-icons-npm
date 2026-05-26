import React from 'react';

export interface LanPlanePropThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlanePropThin: React.FC<LanPlanePropThinProps>;
export default LanPlanePropThin;
