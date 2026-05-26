import React from 'react';

export interface LanHouseCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseCircleCheckSolid: React.FC<LanHouseCircleCheckSolidProps>;
export default LanHouseCircleCheckSolid;
