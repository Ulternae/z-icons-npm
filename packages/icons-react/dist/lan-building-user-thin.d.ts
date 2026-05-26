import React from 'react';

export interface LanBuildingUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingUserThin: React.FC<LanBuildingUserThinProps>;
export default LanBuildingUserThin;
