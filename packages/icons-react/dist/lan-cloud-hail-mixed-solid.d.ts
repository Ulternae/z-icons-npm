import React from 'react';

export interface LanCloudHailMixedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudHailMixedSolid: React.FC<LanCloudHailMixedSolidProps>;
export default LanCloudHailMixedSolid;
