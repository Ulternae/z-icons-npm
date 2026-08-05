import React from 'react';

export interface LanPlaneFlyingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneFlying(props: LanPlaneFlyingProps): React.ReactElement;
export default LanPlaneFlying;
