import React from 'react';

export interface LanSleighThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSleighThin: React.FC<LanSleighThinProps>;
export default LanSleighThin;
