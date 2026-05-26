import React from 'react';

export interface LanBottleDropletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBottleDropletRegular: React.FC<LanBottleDropletRegularProps>;
export default LanBottleDropletRegular;
