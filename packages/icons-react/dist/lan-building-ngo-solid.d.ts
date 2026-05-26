import React from 'react';

export interface LanBuildingNgoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingNgoSolid: React.FC<LanBuildingNgoSolidProps>;
export default LanBuildingNgoSolid;
