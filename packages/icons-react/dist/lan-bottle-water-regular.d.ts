import React from 'react';

export interface LanBottleWaterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBottleWaterRegular: React.FC<LanBottleWaterRegularProps>;
export default LanBottleWaterRegular;
