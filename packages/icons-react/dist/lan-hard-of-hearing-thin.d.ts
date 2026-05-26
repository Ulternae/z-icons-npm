import React from 'react';

export interface LanHardOfHearingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHardOfHearingThin: React.FC<LanHardOfHearingThinProps>;
export default LanHardOfHearingThin;
