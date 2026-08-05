import React from 'react';

export interface LanTruckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruck(props: LanTruckProps): React.ReactElement;
export default LanTruck;
