import React from 'react';

export interface LanTruckBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckBoltSolid: React.FC<LanTruckBoltSolidProps>;
export default LanTruckBoltSolid;
