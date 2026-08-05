import React from 'react';

export interface MinaCloudSunRainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudSunRainSolid(props: MinaCloudSunRainSolidProps): React.ReactElement;
export default MinaCloudSunRainSolid;
