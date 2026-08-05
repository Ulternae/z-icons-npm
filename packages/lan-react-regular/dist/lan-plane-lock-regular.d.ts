import React from 'react';

export interface LanPlaneLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneLockRegular(props: LanPlaneLockRegularProps): React.ReactElement;
export default LanPlaneLockRegular;
