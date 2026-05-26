import React from 'react';

export interface LanUserLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserLockThin: React.FC<LanUserLockThinProps>;
export default LanUserLockThin;
