import React from 'react';

export interface CoreBatteryBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBatteryBoltSolid: React.FC<CoreBatteryBoltSolidProps>;
export default CoreBatteryBoltSolid;
