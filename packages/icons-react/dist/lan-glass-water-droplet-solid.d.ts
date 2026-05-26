import React from 'react';

export interface LanGlassWaterDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassWaterDropletSolid: React.FC<LanGlassWaterDropletSolidProps>;
export default LanGlassWaterDropletSolid;
