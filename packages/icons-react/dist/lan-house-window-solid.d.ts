import React from 'react';

export interface LanHouseWindowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseWindowSolid: React.FC<LanHouseWindowSolidProps>;
export default LanHouseWindowSolid;
