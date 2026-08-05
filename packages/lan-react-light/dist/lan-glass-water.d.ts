import React from 'react';

export interface LanGlassWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassWater(props: LanGlassWaterProps): React.ReactElement;
export default LanGlassWater;
