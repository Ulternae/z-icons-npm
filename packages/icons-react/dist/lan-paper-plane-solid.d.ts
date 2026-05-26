import React from 'react';

export interface LanPaperPlaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaperPlaneSolid: React.FC<LanPaperPlaneSolidProps>;
export default LanPaperPlaneSolid;
