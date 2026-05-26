import React from 'react';

export interface LanCloudRainThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudRainThin: React.FC<LanCloudRainThinProps>;
export default LanCloudRainThin;
