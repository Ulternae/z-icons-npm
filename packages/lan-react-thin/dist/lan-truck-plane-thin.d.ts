import React from 'react';

export interface LanTruckPlaneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckPlaneThin(props: LanTruckPlaneThinProps): React.ReactElement;
export default LanTruckPlaneThin;
