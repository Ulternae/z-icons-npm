import React from 'react';

export interface LanRoadLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadLockThin(props: LanRoadLockThinProps): React.ReactElement;
export default LanRoadLockThin;
