import React from 'react';

export interface LanCarBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBolt: React.FC<LanCarBoltProps>;
export default LanCarBolt;
