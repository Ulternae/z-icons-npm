import React from 'react';

export interface LanGlassWaterDropletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassWaterDropletThin: React.FC<LanGlassWaterDropletThinProps>;
export default LanGlassWaterDropletThin;
