import React from 'react';

export interface LanHouseLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseLockThin: React.FC<LanHouseLockThinProps>;
export default LanHouseLockThin;
