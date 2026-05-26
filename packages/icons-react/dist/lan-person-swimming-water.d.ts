import React from 'react';

export interface LanPersonSwimmingWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSwimmingWater: React.FC<LanPersonSwimmingWaterProps>;
export default LanPersonSwimmingWater;
