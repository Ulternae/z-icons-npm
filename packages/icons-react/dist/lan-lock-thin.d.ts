import React from 'react';

export interface LanLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLockThin: React.FC<LanLockThinProps>;
export default LanLockThin;
