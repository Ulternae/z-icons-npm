import React from 'react';

export interface LanNfcLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcLockThin: React.FC<LanNfcLockThinProps>;
export default LanNfcLockThin;
