import React from 'react';

export interface NeoTruckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTruck(props: NeoTruckProps): React.ReactElement;
export default NeoTruck;
