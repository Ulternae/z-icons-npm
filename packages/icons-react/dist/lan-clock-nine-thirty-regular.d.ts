import React from 'react';

export interface LanClockNineThirtyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockNineThirtyRegular: React.FC<LanClockNineThirtyRegularProps>;
export default LanClockNineThirtyRegular;
