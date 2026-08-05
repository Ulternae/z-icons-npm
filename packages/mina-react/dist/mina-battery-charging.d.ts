import React from 'react';

export interface MinaBatteryChargingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBatteryCharging(props: MinaBatteryChargingProps): React.ReactElement;
export default MinaBatteryCharging;
