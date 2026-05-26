import React from 'react';

export interface LanClockFiveThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockFiveThirty: React.FC<LanClockFiveThirtyProps>;
export default LanClockFiveThirty;
