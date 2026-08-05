import React from 'react';

export interface LanRoadLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadLock(props: LanRoadLockProps): React.ReactElement;
export default LanRoadLock;
