import React from 'react';

export interface LanGlassWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassWaterSolid: React.FC<LanGlassWaterSolidProps>;
export default LanGlassWaterSolid;
