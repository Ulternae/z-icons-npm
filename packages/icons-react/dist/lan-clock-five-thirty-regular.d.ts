import React from 'react';

export interface LanClockFiveThirtyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockFiveThirtyRegular: React.FC<LanClockFiveThirtyRegularProps>;
export default LanClockFiveThirtyRegular;
