import React from 'react';

export interface LanPlanePropThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlanePropThin(props: LanPlanePropThinProps): React.ReactElement;
export default LanPlanePropThin;
