import React from 'react';

export interface LanTruckFrontSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFrontSolid: React.FC<LanTruckFrontSolidProps>;
export default LanTruckFrontSolid;
