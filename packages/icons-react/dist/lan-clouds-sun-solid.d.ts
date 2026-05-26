import React from 'react';

export interface LanCloudsSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudsSunSolid: React.FC<LanCloudsSunSolidProps>;
export default LanCloudsSunSolid;
