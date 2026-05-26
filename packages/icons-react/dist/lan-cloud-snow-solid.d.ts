import React from 'react';

export interface LanCloudSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSnowSolid: React.FC<LanCloudSnowSolidProps>;
export default LanCloudSnowSolid;
