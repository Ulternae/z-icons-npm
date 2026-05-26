import React from 'react';

export interface LanLockOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLockOpenThin: React.FC<LanLockOpenThinProps>;
export default LanLockOpenThin;
