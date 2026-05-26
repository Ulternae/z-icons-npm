import React from 'react';

export interface LanCloudSunRainThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSunRainThin: React.FC<LanCloudSunRainThinProps>;
export default LanCloudSunRainThin;
