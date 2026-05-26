import React from 'react';

export interface LanBuildingMemoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingMemoSolid: React.FC<LanBuildingMemoSolidProps>;
export default LanBuildingMemoSolid;
