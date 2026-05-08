import React from 'react';

export interface MinaBatteryMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBatteryMinusSolid: React.FC<MinaBatteryMinusSolidProps>;
export default MinaBatteryMinusSolid;
