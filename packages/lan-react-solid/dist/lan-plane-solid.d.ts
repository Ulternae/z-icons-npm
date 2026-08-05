import React from 'react';

export interface LanPlaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneSolid(props: LanPlaneSolidProps): React.ReactElement;
export default LanPlaneSolid;
