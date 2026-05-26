import React from 'react';

export interface LanTruckTowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckTowThin: React.FC<LanTruckTowThinProps>;
export default LanTruckTowThin;
