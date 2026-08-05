import React from 'react';

export interface MinaCloudSunRainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudSunRain(props: MinaCloudSunRainProps): React.ReactElement;
export default MinaCloudSunRain;
