import React from 'react';

export interface LanTankWaterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTankWaterThin: React.FC<LanTankWaterThinProps>;
export default LanTankWaterThin;
