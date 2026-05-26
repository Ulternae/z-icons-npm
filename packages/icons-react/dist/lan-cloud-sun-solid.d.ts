import React from 'react';

export interface LanCloudSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSunSolid: React.FC<LanCloudSunSolidProps>;
export default LanCloudSunSolid;
