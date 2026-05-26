import React from 'react';

export interface LanRulerCombinedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerCombinedSolid: React.FC<LanRulerCombinedSolidProps>;
export default LanRulerCombinedSolid;
