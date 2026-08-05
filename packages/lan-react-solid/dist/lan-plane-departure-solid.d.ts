import React from 'react';

export interface LanPlaneDepartureSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneDepartureSolid(props: LanPlaneDepartureSolidProps): React.ReactElement;
export default LanPlaneDepartureSolid;
