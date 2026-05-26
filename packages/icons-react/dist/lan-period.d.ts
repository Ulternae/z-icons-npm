import React from 'react';

export interface LanPeriodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeriod: React.FC<LanPeriodProps>;
export default LanPeriod;
