import React from 'react';

export interface LanPlaneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneThin(props: LanPlaneThinProps): React.ReactElement;
export default LanPlaneThin;
