import React from 'react';

export interface MinaBatteryPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBatteryPlusSolid: React.FC<MinaBatteryPlusSolidProps>;
export default MinaBatteryPlusSolid;
