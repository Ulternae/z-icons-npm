import React from 'react';

export interface LanTruckPlaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckPlaneSolid: React.FC<LanTruckPlaneSolidProps>;
export default LanTruckPlaneSolid;
