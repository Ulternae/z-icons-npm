import React from 'react';

export interface MinaCloudSunRainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudSunRainSolid: React.FC<MinaCloudSunRainSolidProps>;
export default MinaCloudSunRainSolid;
