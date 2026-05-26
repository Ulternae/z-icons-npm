import React from 'react';

export interface LanCloudBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudBolt: React.FC<LanCloudBoltProps>;
export default LanCloudBolt;
