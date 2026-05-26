import React from 'react';

export interface LanBuildingLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingLockThin: React.FC<LanBuildingLockThinProps>;
export default LanBuildingLockThin;
