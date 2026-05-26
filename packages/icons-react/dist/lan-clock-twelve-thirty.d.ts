import React from 'react';

export interface LanClockTwelveThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTwelveThirty: React.FC<LanClockTwelveThirtyProps>;
export default LanClockTwelveThirty;
