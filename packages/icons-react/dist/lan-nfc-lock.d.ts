import React from 'react';

export interface LanNfcLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcLock: React.FC<LanNfcLockProps>;
export default LanNfcLock;
