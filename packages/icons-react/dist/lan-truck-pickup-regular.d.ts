import React from 'react';

export interface LanTruckPickupRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckPickupRegular: React.FC<LanTruckPickupRegularProps>;
export default LanTruckPickupRegular;
