import React from 'react';

export interface LanPlaneTailThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneTailThin(props: LanPlaneTailThinProps): React.ReactElement;
export default LanPlaneTailThin;
