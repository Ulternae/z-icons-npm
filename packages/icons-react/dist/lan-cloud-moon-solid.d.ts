import React from 'react';

export interface LanCloudMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMoonSolid: React.FC<LanCloudMoonSolidProps>;
export default LanCloudMoonSolid;
