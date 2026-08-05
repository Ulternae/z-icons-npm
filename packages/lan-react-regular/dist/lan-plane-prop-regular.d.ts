import React from 'react';

export interface LanPlanePropRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlanePropRegular(props: LanPlanePropRegularProps): React.ReactElement;
export default LanPlanePropRegular;
