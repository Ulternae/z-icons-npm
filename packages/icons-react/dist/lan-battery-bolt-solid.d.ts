import React from 'react';

export interface LanBatteryBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBatteryBoltSolid: React.FC<LanBatteryBoltSolidProps>;
export default LanBatteryBoltSolid;
