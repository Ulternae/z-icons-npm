import React from 'react';

export interface LanHammerCrashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHammerCrash: React.FC<LanHammerCrashProps>;
export default LanHammerCrash;
