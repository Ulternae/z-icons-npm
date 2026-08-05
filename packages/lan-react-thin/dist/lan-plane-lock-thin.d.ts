import React from 'react';

export interface LanPlaneLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneLockThin(props: LanPlaneLockThinProps): React.ReactElement;
export default LanPlaneLockThin;
