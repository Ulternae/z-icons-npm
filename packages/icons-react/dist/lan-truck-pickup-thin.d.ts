import React from 'react';

export interface LanTruckPickupThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckPickupThin: React.FC<LanTruckPickupThinProps>;
export default LanTruckPickupThin;
