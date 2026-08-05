import React from 'react';

export interface LanBuildingUnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingUnSolid(props: LanBuildingUnSolidProps): React.ReactElement;
export default LanBuildingUnSolid;
