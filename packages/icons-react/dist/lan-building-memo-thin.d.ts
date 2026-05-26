import React from 'react';

export interface LanBuildingMemoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingMemoThin: React.FC<LanBuildingMemoThinProps>;
export default LanBuildingMemoThin;
