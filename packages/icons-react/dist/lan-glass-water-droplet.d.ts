import React from 'react';

export interface LanGlassWaterDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassWaterDroplet: React.FC<LanGlassWaterDropletProps>;
export default LanGlassWaterDroplet;
