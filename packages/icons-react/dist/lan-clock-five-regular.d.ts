import React from 'react';

export interface LanClockFiveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockFiveRegular: React.FC<LanClockFiveRegularProps>;
export default LanClockFiveRegular;
