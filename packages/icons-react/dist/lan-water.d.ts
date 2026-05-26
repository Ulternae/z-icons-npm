import React from 'react';

export interface LanWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWater: React.FC<LanWaterProps>;
export default LanWater;
