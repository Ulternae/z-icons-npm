import React from 'react';

export interface LanGlassWaterDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassWaterDropletSolid(props: LanGlassWaterDropletSolidProps): React.ReactElement;
export default LanGlassWaterDropletSolid;
