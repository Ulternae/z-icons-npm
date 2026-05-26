import React from 'react';

export interface LanClockOneThirtyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockOneThirtyRegular: React.FC<LanClockOneThirtyRegularProps>;
export default LanClockOneThirtyRegular;
