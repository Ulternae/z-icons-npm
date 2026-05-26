import React from 'react';

export interface LanClockFourRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockFourRegular: React.FC<LanClockFourRegularProps>;
export default LanClockFourRegular;
