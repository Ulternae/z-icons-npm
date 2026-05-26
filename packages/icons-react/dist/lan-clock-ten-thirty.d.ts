import React from 'react';

export interface LanClockTenThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTenThirty: React.FC<LanClockTenThirtyProps>;
export default LanClockTenThirty;
