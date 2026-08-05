import React from 'react';

export interface LanRoadLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadLockSolid(props: LanRoadLockSolidProps): React.ReactElement;
export default LanRoadLockSolid;
