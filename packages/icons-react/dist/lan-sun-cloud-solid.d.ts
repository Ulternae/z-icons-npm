import React from 'react';

export interface LanSunCloudSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunCloudSolid: React.FC<LanSunCloudSolidProps>;
export default LanSunCloudSolid;
