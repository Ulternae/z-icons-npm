import React from 'react';

export interface LanSuitcaseRollingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSuitcaseRollingThin: React.FC<LanSuitcaseRollingThinProps>;
export default LanSuitcaseRollingThin;
