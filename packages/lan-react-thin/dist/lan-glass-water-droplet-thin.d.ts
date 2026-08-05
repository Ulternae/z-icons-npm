import React from 'react';

export interface LanGlassWaterDropletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassWaterDropletThin(props: LanGlassWaterDropletThinProps): React.ReactElement;
export default LanGlassWaterDropletThin;
