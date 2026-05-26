import React from 'react';

export interface LanPlaneFlyingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneFlying: React.FC<LanPlaneFlyingProps>;
export default LanPlaneFlying;
