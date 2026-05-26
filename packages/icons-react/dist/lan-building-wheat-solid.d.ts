import React from 'react';

export interface LanBuildingWheatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingWheatSolid: React.FC<LanBuildingWheatSolidProps>;
export default LanBuildingWheatSolid;
