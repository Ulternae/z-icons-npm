import React from 'react';

export interface MinaBatteryCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBatteryCheck: React.FC<MinaBatteryCheckProps>;
export default MinaBatteryCheck;
