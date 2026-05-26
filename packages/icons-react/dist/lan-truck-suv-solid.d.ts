import React from 'react';

export interface LanTruckSuvSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckSuvSolid: React.FC<LanTruckSuvSolidProps>;
export default LanTruckSuvSolid;
