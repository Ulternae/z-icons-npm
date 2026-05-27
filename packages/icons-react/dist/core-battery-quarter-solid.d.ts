import React from 'react';

export interface CoreBatteryQuarterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBatteryQuarterSolid: React.FC<CoreBatteryQuarterSolidProps>;
export default CoreBatteryQuarterSolid;
