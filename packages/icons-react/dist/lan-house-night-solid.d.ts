import React from 'react';

export interface LanHouseNightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseNightSolid: React.FC<LanHouseNightSolidProps>;
export default LanHouseNightSolid;
