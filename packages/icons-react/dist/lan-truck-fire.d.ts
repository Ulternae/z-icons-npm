import React from 'react';

export interface LanTruckFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFire: React.FC<LanTruckFireProps>;
export default LanTruckFire;
