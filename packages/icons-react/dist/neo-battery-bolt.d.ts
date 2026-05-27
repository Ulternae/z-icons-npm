import React from 'react';

export interface NeoBatteryBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBatteryBolt: React.FC<NeoBatteryBoltProps>;
export default NeoBatteryBolt;
