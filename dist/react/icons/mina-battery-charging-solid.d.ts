import React from 'react';

export interface MinaBatteryChargingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBatteryChargingSolid: React.FC<MinaBatteryChargingSolidProps>;
export default MinaBatteryChargingSolid;
