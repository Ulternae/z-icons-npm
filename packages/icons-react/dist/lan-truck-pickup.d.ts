import React from 'react';

export interface LanTruckPickupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckPickup: React.FC<LanTruckPickupProps>;
export default LanTruckPickup;
