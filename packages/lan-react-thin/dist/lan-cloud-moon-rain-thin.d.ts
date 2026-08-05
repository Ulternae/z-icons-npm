import React from 'react';

export interface LanCloudMoonRainThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMoonRainThin(props: LanCloudMoonRainThinProps): React.ReactElement;
export default LanCloudMoonRainThin;
