import React from 'react';

export interface CoreBatteryFullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBatteryFull: React.FC<CoreBatteryFullProps>;
export default CoreBatteryFull;
