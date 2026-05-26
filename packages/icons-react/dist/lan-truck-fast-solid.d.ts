import React from 'react';

export interface LanTruckFastSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFastSolid: React.FC<LanTruckFastSolidProps>;
export default LanTruckFastSolid;
