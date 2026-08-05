import React from 'react';

export interface LanBuildingUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingUserSolid(props: LanBuildingUserSolidProps): React.ReactElement;
export default LanBuildingUserSolid;
