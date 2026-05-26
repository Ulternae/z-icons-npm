import React from 'react';

export interface LanHammerCrashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHammerCrashThin: React.FC<LanHammerCrashThinProps>;
export default LanHammerCrashThin;
