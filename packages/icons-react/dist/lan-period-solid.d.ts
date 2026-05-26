import React from 'react';

export interface LanPeriodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeriodSolid: React.FC<LanPeriodSolidProps>;
export default LanPeriodSolid;
