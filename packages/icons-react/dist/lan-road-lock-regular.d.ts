import React from 'react';

export interface LanRoadLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadLockRegular: React.FC<LanRoadLockRegularProps>;
export default LanRoadLockRegular;
