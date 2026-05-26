import React from 'react';

export interface LanPlaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneSolid: React.FC<LanPlaneSolidProps>;
export default LanPlaneSolid;
