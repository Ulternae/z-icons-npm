import React from 'react';

export interface LanPlaneLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneLock(props: LanPlaneLockProps): React.ReactElement;
export default LanPlaneLock;
