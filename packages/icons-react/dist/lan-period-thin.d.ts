import React from 'react';

export interface LanPeriodThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeriodThin: React.FC<LanPeriodThinProps>;
export default LanPeriodThin;
