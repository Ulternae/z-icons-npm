import React from 'react';

export interface LanClockSixRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockSixRegular: React.FC<LanClockSixRegularProps>;
export default LanClockSixRegular;
