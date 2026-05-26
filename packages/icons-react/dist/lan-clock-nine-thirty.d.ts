import React from 'react';

export interface LanClockNineThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockNineThirty: React.FC<LanClockNineThirtyProps>;
export default LanClockNineThirty;
