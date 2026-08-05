import React from 'react';

export interface LanPlaneLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneLockSolid(props: LanPlaneLockSolidProps): React.ReactElement;
export default LanPlaneLockSolid;
