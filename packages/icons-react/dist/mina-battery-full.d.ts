import React from 'react';

export interface MinaBatteryFullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBatteryFull: React.FC<MinaBatteryFullProps>;
export default MinaBatteryFull;
