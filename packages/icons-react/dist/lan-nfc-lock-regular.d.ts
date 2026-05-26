import React from 'react';

export interface LanNfcLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcLockRegular: React.FC<LanNfcLockRegularProps>;
export default LanNfcLockRegular;
