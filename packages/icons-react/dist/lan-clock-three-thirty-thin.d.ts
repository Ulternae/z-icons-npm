import React from 'react';

export interface LanClockThreeThirtyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockThreeThirtyThin: React.FC<LanClockThreeThirtyThinProps>;
export default LanClockThreeThirtyThin;
