import React from 'react';

export interface LanCloudSunRainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSunRainSolid: React.FC<LanCloudSunRainSolidProps>;
export default LanCloudSunRainSolid;
