import React from 'react';

export interface LanBottleWaterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBottleWaterThin: React.FC<LanBottleWaterThinProps>;
export default LanBottleWaterThin;
