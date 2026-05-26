import React from 'react';

export interface LanBottleWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBottleWater: React.FC<LanBottleWaterProps>;
export default LanBottleWater;
