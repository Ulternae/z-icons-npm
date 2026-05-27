import React from 'react';

export interface CoreBatteryQuarterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBatteryQuarter: React.FC<CoreBatteryQuarterProps>;
export default CoreBatteryQuarter;
