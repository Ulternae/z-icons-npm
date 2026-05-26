import React from 'react';

export interface LanBuildingLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingLock: React.FC<LanBuildingLockProps>;
export default LanBuildingLock;
