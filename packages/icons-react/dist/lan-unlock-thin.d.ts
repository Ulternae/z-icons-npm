import React from 'react';

export interface LanUnlockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUnlockThin: React.FC<LanUnlockThinProps>;
export default LanUnlockThin;
