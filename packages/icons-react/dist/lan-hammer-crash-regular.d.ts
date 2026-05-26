import React from 'react';

export interface LanHammerCrashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHammerCrashRegular: React.FC<LanHammerCrashRegularProps>;
export default LanHammerCrashRegular;
