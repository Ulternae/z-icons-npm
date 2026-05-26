import React from 'react';

export interface LanBuildingCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingCircleCheckSolid: React.FC<LanBuildingCircleCheckSolidProps>;
export default LanBuildingCircleCheckSolid;
