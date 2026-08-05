import React from 'react';

export interface LanPlaneTailSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneTailSolid(props: LanPlaneTailSolidProps): React.ReactElement;
export default LanPlaneTailSolid;
