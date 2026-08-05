import React from 'react';

export interface MinaTruckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTruck(props: MinaTruckProps): React.ReactElement;
export default MinaTruck;
