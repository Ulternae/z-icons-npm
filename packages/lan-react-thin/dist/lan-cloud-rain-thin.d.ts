import React from 'react';

export interface LanCloudRainThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudRainThin(props: LanCloudRainThinProps): React.ReactElement;
export default LanCloudRainThin;
