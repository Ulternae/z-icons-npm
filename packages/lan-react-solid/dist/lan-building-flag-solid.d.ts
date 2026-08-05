import React from 'react';

export interface LanBuildingFlagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingFlagSolid(props: LanBuildingFlagSolidProps): React.ReactElement;
export default LanBuildingFlagSolid;
