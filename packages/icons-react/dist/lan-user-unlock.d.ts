import React from 'react';

export interface LanUserUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserUnlock: React.FC<LanUserUnlockProps>;
export default LanUserUnlock;
