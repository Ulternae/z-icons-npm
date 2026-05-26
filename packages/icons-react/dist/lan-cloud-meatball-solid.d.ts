import React from 'react';

export interface LanCloudMeatballSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudMeatballSolid: React.FC<LanCloudMeatballSolidProps>;
export default LanCloudMeatballSolid;
