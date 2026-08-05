import React from 'react';

export interface LanTruckPlaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckPlaneSolid(props: LanTruckPlaneSolidProps): React.ReactElement;
export default LanTruckPlaneSolid;
