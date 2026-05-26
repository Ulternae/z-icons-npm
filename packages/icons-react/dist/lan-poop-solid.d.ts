import React from 'react';

export interface LanPoopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPoopSolid: React.FC<LanPoopSolidProps>;
export default LanPoopSolid;
