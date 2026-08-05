import React from 'react';

export interface LanPlanePropSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlanePropSolid(props: LanPlanePropSolidProps): React.ReactElement;
export default LanPlanePropSolid;
