import React from 'react';

export interface LanPlaneTailRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneTailRegular: React.FC<LanPlaneTailRegularProps>;
export default LanPlaneTailRegular;
