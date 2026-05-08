import React from 'react';

export interface MinaBatteryMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBatteryMinus: React.FC<MinaBatteryMinusProps>;
export default MinaBatteryMinus;
