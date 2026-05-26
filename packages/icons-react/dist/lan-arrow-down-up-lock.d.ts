import React from 'react';

export interface LanArrowDownUpLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowDownUpLock: React.FC<LanArrowDownUpLockProps>;
export default LanArrowDownUpLock;
