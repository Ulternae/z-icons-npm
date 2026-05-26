import React from 'react';

export interface LanPlaneTailProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneTail: React.FC<LanPlaneTailProps>;
export default LanPlaneTail;
