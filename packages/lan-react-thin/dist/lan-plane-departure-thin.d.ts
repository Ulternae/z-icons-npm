import React from 'react';

export interface LanPlaneDepartureThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneDepartureThin(props: LanPlaneDepartureThinProps): React.ReactElement;
export default LanPlaneDepartureThin;
