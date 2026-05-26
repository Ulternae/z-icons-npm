import React from 'react';

export interface LanBinaryLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinaryLockThin: React.FC<LanBinaryLockThinProps>;
export default LanBinaryLockThin;
