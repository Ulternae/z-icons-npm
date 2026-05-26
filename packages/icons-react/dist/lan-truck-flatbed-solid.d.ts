import React from 'react';

export interface LanTruckFlatbedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFlatbedSolid: React.FC<LanTruckFlatbedSolidProps>;
export default LanTruckFlatbedSolid;
