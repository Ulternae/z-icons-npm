import React from 'react';

export interface LanBuildingCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingCircleCheckSolid(props: LanBuildingCircleCheckSolidProps): React.ReactElement;
export default LanBuildingCircleCheckSolid;
