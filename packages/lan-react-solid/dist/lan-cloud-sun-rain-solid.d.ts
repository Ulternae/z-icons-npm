import React from 'react';

export interface LanCloudSunRainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSunRainSolid(props: LanCloudSunRainSolidProps): React.ReactElement;
export default LanCloudSunRainSolid;
