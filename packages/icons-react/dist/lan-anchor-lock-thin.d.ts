import React from 'react';

export interface LanAnchorLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnchorLockThin: React.FC<LanAnchorLockThinProps>;
export default LanAnchorLockThin;
