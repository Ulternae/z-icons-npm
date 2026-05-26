import React from 'react';

export interface LanGlassWaterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassWaterThin: React.FC<LanGlassWaterThinProps>;
export default LanGlassWaterThin;
