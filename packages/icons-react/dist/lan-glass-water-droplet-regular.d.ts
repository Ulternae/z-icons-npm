import React from 'react';

export interface LanGlassWaterDropletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassWaterDropletRegular: React.FC<LanGlassWaterDropletRegularProps>;
export default LanGlassWaterDropletRegular;
