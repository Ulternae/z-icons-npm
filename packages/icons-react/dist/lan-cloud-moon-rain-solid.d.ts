import React from 'react';

export interface LanCloudMoonRainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMoonRainSolid: React.FC<LanCloudMoonRainSolidProps>;
export default LanCloudMoonRainSolid;
