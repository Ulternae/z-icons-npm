import React from 'react';

export interface CoreBatteryFullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBatteryFullSolid: React.FC<CoreBatteryFullSolidProps>;
export default CoreBatteryFullSolid;
