import React from 'react';

export interface MinaBatteryXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBatteryX: React.FC<MinaBatteryXProps>;
export default MinaBatteryX;
