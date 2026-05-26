import React from 'react';

export interface LanPlaneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneThin: React.FC<LanPlaneThinProps>;
export default LanPlaneThin;
