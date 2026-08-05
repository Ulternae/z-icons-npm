import React from 'react';

export interface LanBuildingLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingLock(props: LanBuildingLockProps): React.ReactElement;
export default LanBuildingLock;
