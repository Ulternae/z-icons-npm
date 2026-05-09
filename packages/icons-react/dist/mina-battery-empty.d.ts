import React from 'react';

export interface MinaBatteryEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBatteryEmpty: React.FC<MinaBatteryEmptyProps>;
export default MinaBatteryEmpty;
