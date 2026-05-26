import React from 'react';

export interface LanCloudSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSolid: React.FC<LanCloudSolidProps>;
export default LanCloudSolid;
