import React from 'react';

export interface LanHammerCrashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHammerCrashSolid: React.FC<LanHammerCrashSolidProps>;
export default LanHammerCrashSolid;
