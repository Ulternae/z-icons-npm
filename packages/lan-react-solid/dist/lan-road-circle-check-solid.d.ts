import React from 'react';

export interface LanRoadCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadCircleCheckSolid(props: LanRoadCircleCheckSolidProps): React.ReactElement;
export default LanRoadCircleCheckSolid;
