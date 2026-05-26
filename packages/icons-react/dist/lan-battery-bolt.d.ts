import React from 'react';

export interface LanBatteryBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBatteryBolt: React.FC<LanBatteryBoltProps>;
export default LanBatteryBolt;
