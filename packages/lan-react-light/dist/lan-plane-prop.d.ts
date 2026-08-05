import React from 'react';

export interface LanPlanePropProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneProp(props: LanPlanePropProps): React.ReactElement;
export default LanPlaneProp;
