import React from 'react';

export interface LanGlassWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassWaterSolid(props: LanGlassWaterSolidProps): React.ReactElement;
export default LanGlassWaterSolid;
