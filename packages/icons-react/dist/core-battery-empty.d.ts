import React from 'react';

export interface CoreBatteryEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBatteryEmpty: React.FC<CoreBatteryEmptyProps>;
export default CoreBatteryEmpty;
