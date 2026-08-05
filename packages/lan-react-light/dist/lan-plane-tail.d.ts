import React from 'react';

export interface LanPlaneTailProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneTail(props: LanPlaneTailProps): React.ReactElement;
export default LanPlaneTail;
