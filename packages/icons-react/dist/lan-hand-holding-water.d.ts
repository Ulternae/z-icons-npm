import React from 'react';

export interface LanHandHoldingWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingWater: React.FC<LanHandHoldingWaterProps>;
export default LanHandHoldingWater;
