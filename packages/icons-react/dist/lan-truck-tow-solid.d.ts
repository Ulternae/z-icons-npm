import React from 'react';

export interface LanTruckTowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckTowSolid: React.FC<LanTruckTowSolidProps>;
export default LanTruckTowSolid;
