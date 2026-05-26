import React from 'react';

export interface LanNfcLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcLockSolid: React.FC<LanNfcLockSolidProps>;
export default LanNfcLockSolid;
