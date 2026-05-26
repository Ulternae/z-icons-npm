import React from 'react';

export interface LanClockOneThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockOneThirty: React.FC<LanClockOneThirtyProps>;
export default LanClockOneThirty;
