import React from 'react';

export interface MinaCloudSunRainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudSunRain: React.FC<MinaCloudSunRainProps>;
export default MinaCloudSunRain;
