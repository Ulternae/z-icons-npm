import React from 'react';

export interface LanBottleDropletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBottleDropletThin: React.FC<LanBottleDropletThinProps>;
export default LanBottleDropletThin;
