import React from 'react';

export interface LanCloudRainbowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudRainbowThin(props: LanCloudRainbowThinProps): React.ReactElement;
export default LanCloudRainbowThin;
