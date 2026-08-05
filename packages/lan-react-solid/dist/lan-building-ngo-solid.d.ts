import React from 'react';

export interface LanBuildingNgoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingNgoSolid(props: LanBuildingNgoSolidProps): React.ReactElement;
export default LanBuildingNgoSolid;
