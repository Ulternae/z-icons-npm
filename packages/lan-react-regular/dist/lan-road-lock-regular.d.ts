import React from 'react';

export interface LanRoadLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadLockRegular(props: LanRoadLockRegularProps): React.ReactElement;
export default LanRoadLockRegular;
