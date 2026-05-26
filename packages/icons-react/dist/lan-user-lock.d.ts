import React from 'react';

export interface LanUserLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserLock: React.FC<LanUserLockProps>;
export default LanUserLock;
