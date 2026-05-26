import React from 'react';

export interface LanTruckFieldUnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFieldUnSolid: React.FC<LanTruckFieldUnSolidProps>;
export default LanTruckFieldUnSolid;
