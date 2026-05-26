import React from 'react';

export interface LanLockHashtagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLockHashtagThin: React.FC<LanLockHashtagThinProps>;
export default LanLockHashtagThin;
