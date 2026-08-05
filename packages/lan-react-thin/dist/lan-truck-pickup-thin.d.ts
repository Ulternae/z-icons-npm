import React from 'react';

export interface LanTruckPickupThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckPickupThin(props: LanTruckPickupThinProps): React.ReactElement;
export default LanTruckPickupThin;
