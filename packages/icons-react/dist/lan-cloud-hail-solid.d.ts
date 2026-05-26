import React from 'react';

export interface LanCloudHailSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudHailSolid: React.FC<LanCloudHailSolidProps>;
export default LanCloudHailSolid;
