import React from 'react';

export interface LanLockAThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLockAThin: React.FC<LanLockAThinProps>;
export default LanLockAThin;
