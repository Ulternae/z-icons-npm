import React from 'react';

export interface LanHouseTsunamiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseTsunamiSolid: React.FC<LanHouseTsunamiSolidProps>;
export default LanHouseTsunamiSolid;
