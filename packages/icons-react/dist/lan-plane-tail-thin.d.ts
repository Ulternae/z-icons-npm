import React from 'react';

export interface LanPlaneTailThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneTailThin: React.FC<LanPlaneTailThinProps>;
export default LanPlaneTailThin;
