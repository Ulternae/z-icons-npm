import React from 'react';

export interface LanCloudRainbowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudRainbowSolid: React.FC<LanCloudRainbowSolidProps>;
export default LanCloudRainbowSolid;
