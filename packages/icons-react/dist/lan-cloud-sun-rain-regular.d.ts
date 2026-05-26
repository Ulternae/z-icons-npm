import React from 'react';

export interface LanCloudSunRainRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSunRainRegular: React.FC<LanCloudSunRainRegularProps>;
export default LanCloudSunRainRegular;
