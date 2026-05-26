import React from 'react';

export interface LanCloudMoonRainThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMoonRainThin: React.FC<LanCloudMoonRainThinProps>;
export default LanCloudMoonRainThin;
