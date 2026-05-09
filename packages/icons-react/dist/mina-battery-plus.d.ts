import React from 'react';

export interface MinaBatteryPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBatteryPlus: React.FC<MinaBatteryPlusProps>;
export default MinaBatteryPlus;
