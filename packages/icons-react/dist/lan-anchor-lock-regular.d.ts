import React from 'react';

export interface LanAnchorLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnchorLockRegular: React.FC<LanAnchorLockRegularProps>;
export default LanAnchorLockRegular;
