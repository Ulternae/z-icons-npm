import React from 'react';

export interface LanCloudSunRainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSunRain: React.FC<LanCloudSunRainProps>;
export default LanCloudSunRain;
