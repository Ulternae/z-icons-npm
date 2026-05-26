import React from 'react';

export interface LanPenRulerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenRulerSolid: React.FC<LanPenRulerSolidProps>;
export default LanPenRulerSolid;
