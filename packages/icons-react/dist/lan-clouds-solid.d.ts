import React from 'react';

export interface LanCloudsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudsSolid: React.FC<LanCloudsSolidProps>;
export default LanCloudsSolid;
