import React from 'react';

export interface LanCloudRainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudRainSolid: React.FC<LanCloudRainSolidProps>;
export default LanCloudRainSolid;
