import React from 'react';

export interface LanUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUnlock: React.FC<LanUnlockProps>;
export default LanUnlock;
