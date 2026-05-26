import React from 'react';

export interface LanBuildingCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingCircleCheckThin: React.FC<LanBuildingCircleCheckThinProps>;
export default LanBuildingCircleCheckThin;
