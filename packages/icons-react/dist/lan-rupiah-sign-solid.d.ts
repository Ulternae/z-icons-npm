import React from 'react';

export interface LanRupiahSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRupiahSignSolid: React.FC<LanRupiahSignSolidProps>;
export default LanRupiahSignSolid;
