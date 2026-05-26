import React from 'react';

export interface LanClockTwoThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTwoThirty: React.FC<LanClockTwoThirtyProps>;
export default LanClockTwoThirty;
