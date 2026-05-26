import React from 'react';

export interface LanCloudMoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMoonThin: React.FC<LanCloudMoonThinProps>;
export default LanCloudMoonThin;
