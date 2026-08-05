import React from 'react';

export interface LanCloudSunRainRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSunRainRegular(props: LanCloudSunRainRegularProps): React.ReactElement;
export default LanCloudSunRainRegular;
