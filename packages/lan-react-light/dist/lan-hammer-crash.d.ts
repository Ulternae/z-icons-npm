import React from 'react';

export interface LanHammerCrashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHammerCrash(props: LanHammerCrashProps): React.ReactElement;
export default LanHammerCrash;
