import React from 'react';

export interface LanTruckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckSolid: React.FC<LanTruckSolidProps>;
export default LanTruckSolid;
