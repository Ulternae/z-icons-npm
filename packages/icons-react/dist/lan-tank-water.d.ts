import React from 'react';

export interface LanTankWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTankWater: React.FC<LanTankWaterProps>;
export default LanTankWater;
