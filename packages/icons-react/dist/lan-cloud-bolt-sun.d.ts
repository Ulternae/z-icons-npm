import React from 'react';

export interface LanCloudBoltSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudBoltSun: React.FC<LanCloudBoltSunProps>;
export default LanCloudBoltSun;
