import React from 'react';

export interface LanHashtagLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHashtagLock: React.FC<LanHashtagLockProps>;
export default LanHashtagLock;
