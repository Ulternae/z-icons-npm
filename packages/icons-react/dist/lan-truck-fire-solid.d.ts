import React from 'react';

export interface LanTruckFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFireSolid: React.FC<LanTruckFireSolidProps>;
export default LanTruckFireSolid;
