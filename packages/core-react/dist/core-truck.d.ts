import React from 'react';

export interface CoreTruckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTruck(props: CoreTruckProps): React.ReactElement;
export default CoreTruck;
