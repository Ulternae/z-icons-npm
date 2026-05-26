import React from 'react';

export interface LanBottleWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBottleWaterSolid: React.FC<LanBottleWaterSolidProps>;
export default LanBottleWaterSolid;
