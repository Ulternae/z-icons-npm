import React from 'react';

export interface CoreBatteryBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBatteryBolt: React.FC<CoreBatteryBoltProps>;
export default CoreBatteryBolt;
