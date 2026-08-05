import React from 'react';

export interface LanCloudSunRainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSunRain(props: LanCloudSunRainProps): React.ReactElement;
export default LanCloudSunRain;
