import React from 'react';

export interface LanCloudDrizzleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudDrizzleSolid: React.FC<LanCloudDrizzleSolidProps>;
export default LanCloudDrizzleSolid;
