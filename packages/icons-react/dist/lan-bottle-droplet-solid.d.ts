import React from 'react';

export interface LanBottleDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBottleDropletSolid: React.FC<LanBottleDropletSolidProps>;
export default LanBottleDropletSolid;
