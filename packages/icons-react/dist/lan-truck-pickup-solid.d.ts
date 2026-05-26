import React from 'react';

export interface LanTruckPickupSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckPickupSolid: React.FC<LanTruckPickupSolidProps>;
export default LanTruckPickupSolid;
