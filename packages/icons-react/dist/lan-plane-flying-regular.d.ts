import React from 'react';

export interface LanPlaneFlyingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneFlyingRegular: React.FC<LanPlaneFlyingRegularProps>;
export default LanPlaneFlyingRegular;
