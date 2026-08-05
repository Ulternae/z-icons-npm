import React from 'react';

export interface LanPlaneTailRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneTailRegular(props: LanPlaneTailRegularProps): React.ReactElement;
export default LanPlaneTailRegular;
