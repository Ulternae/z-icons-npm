import React from 'react';

export interface LanHouseTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseTreeSolid: React.FC<LanHouseTreeSolidProps>;
export default LanHouseTreeSolid;
