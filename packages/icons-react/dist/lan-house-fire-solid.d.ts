import React from 'react';

export interface LanHouseFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseFireSolid: React.FC<LanHouseFireSolidProps>;
export default LanHouseFireSolid;
