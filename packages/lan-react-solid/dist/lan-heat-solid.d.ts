import React from 'react';

export interface LanHeatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeatSolid(props: LanHeatSolidProps): React.ReactElement;
export default LanHeatSolid;
