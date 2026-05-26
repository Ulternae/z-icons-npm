import React from 'react';

export interface LanRulerHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerHorizontalSolid: React.FC<LanRulerHorizontalSolidProps>;
export default LanRulerHorizontalSolid;
