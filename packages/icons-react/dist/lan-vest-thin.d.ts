import React from 'react';

export interface LanVestThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVestThin: React.FC<LanVestThinProps>;
export default LanVestThin;
