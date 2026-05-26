import React from 'react';

export interface LanPlaneFlyingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneFlyingSolid: React.FC<LanPlaneFlyingSolidProps>;
export default LanPlaneFlyingSolid;
