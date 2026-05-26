import React from 'react';

export interface LanBuildingUnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingUnSolid: React.FC<LanBuildingUnSolidProps>;
export default LanBuildingUnSolid;
