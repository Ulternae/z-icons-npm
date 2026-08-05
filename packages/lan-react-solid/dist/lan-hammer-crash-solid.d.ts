import React from 'react';

export interface LanHammerCrashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHammerCrashSolid(props: LanHammerCrashSolidProps): React.ReactElement;
export default LanHammerCrashSolid;
