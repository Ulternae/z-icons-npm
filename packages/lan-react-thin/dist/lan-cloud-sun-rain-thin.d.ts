import React from 'react';

export interface LanCloudSunRainThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSunRainThin(props: LanCloudSunRainThinProps): React.ReactElement;
export default LanCloudSunRainThin;
