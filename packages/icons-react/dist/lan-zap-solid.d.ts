import React from 'react';

export interface LanZapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanZapSolid: React.FC<LanZapSolidProps>;
export default LanZapSolid;
