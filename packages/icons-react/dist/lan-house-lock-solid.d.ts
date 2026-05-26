import React from 'react';

export interface LanHouseLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseLockSolid: React.FC<LanHouseLockSolidProps>;
export default LanHouseLockSolid;
