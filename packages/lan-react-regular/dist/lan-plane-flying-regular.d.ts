import React from 'react';

export interface LanPlaneFlyingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneFlyingRegular(props: LanPlaneFlyingRegularProps): React.ReactElement;
export default LanPlaneFlyingRegular;
