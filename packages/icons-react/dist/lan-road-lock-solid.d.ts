import React from 'react';

export interface LanRoadLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadLockSolid: React.FC<LanRoadLockSolidProps>;
export default LanRoadLockSolid;
