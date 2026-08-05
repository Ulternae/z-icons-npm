import React from 'react';

export interface LanHammerCrashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHammerCrashThin(props: LanHammerCrashThinProps): React.ReactElement;
export default LanHammerCrashThin;
