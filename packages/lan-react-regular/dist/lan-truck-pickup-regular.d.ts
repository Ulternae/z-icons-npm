import React from 'react';

export interface LanTruckPickupRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckPickupRegular(props: LanTruckPickupRegularProps): React.ReactElement;
export default LanTruckPickupRegular;
