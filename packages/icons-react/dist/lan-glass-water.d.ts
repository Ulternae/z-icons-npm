import React from 'react';

export interface LanGlassWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassWater: React.FC<LanGlassWaterProps>;
export default LanGlassWater;
