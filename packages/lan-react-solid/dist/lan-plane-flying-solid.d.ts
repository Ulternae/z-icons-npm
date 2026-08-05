import React from 'react';

export interface LanPlaneFlyingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneFlyingSolid(props: LanPlaneFlyingSolidProps): React.ReactElement;
export default LanPlaneFlyingSolid;
