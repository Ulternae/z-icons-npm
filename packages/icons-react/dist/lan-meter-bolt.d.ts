import React from 'react';

export interface LanMeterBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeterBolt: React.FC<LanMeterBoltProps>;
export default LanMeterBolt;
