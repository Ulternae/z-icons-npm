import React from 'react';

export interface LanCloudBoltSunThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudBoltSunThin: React.FC<LanCloudBoltSunThinProps>;
export default LanCloudBoltSunThin;
