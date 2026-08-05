import React from 'react';

export interface LanPlaneFlyingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneFlyingThin(props: LanPlaneFlyingThinProps): React.ReactElement;
export default LanPlaneFlyingThin;
