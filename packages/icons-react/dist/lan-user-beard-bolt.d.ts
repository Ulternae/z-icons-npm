import React from 'react';

export interface LanUserBeardBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserBeardBolt: React.FC<LanUserBeardBoltProps>;
export default LanUserBeardBolt;
