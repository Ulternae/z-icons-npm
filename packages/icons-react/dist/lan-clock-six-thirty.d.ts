import React from 'react';

export interface LanClockSixThirtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockSixThirty: React.FC<LanClockSixThirtyProps>;
export default LanClockSixThirty;
