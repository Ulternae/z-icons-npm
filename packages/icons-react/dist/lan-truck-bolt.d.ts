import React from 'react';

export interface LanTruckBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckBolt: React.FC<LanTruckBoltProps>;
export default LanTruckBolt;
