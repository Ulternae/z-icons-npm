import React from 'react';

export interface LanTruckPickupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckPickup(props: LanTruckPickupProps): React.ReactElement;
export default LanTruckPickup;
