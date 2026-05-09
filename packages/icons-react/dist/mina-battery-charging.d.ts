import React from 'react';

export interface MinaBatteryChargingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBatteryCharging: React.FC<MinaBatteryChargingProps>;
export default MinaBatteryCharging;
