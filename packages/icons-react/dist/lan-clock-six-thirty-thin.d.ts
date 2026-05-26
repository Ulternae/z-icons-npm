import React from 'react';

export interface LanClockSixThirtyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockSixThirtyThin: React.FC<LanClockSixThirtyThinProps>;
export default LanClockSixThirtyThin;
