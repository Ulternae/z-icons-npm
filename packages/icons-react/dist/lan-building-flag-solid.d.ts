import React from 'react';

export interface LanBuildingFlagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingFlagSolid: React.FC<LanBuildingFlagSolidProps>;
export default LanBuildingFlagSolid;
