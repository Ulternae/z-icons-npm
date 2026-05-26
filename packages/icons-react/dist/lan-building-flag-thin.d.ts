import React from 'react';

export interface LanBuildingFlagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingFlagThin: React.FC<LanBuildingFlagThinProps>;
export default LanBuildingFlagThin;
