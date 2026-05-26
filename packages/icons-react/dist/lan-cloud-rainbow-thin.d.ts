import React from 'react';

export interface LanCloudRainbowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudRainbowThin: React.FC<LanCloudRainbowThinProps>;
export default LanCloudRainbowThin;
