import React from 'react';

export interface LanMoonCloudSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonCloudSolid: React.FC<LanMoonCloudSolidProps>;
export default LanMoonCloudSolid;
