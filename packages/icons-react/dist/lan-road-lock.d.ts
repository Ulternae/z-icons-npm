import React from 'react';

export interface LanRoadLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadLock: React.FC<LanRoadLockProps>;
export default LanRoadLock;
