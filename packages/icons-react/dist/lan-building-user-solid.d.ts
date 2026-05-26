import React from 'react';

export interface LanBuildingUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingUserSolid: React.FC<LanBuildingUserSolidProps>;
export default LanBuildingUserSolid;
