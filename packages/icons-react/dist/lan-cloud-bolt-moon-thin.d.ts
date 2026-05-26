import React from 'react';

export interface LanCloudBoltMoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudBoltMoonThin: React.FC<LanCloudBoltMoonThinProps>;
export default LanCloudBoltMoonThin;
