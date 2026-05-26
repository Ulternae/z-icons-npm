import React from 'react';

export interface LanRulerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerSolid: React.FC<LanRulerSolidProps>;
export default LanRulerSolid;
