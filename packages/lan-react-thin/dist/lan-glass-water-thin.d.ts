import React from 'react';

export interface LanGlassWaterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassWaterThin(props: LanGlassWaterThinProps): React.ReactElement;
export default LanGlassWaterThin;
