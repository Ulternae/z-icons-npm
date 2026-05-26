import React from 'react';

export interface LanPlanePropRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlanePropRegular: React.FC<LanPlanePropRegularProps>;
export default LanPlanePropRegular;
