import React from 'react';

export interface LanClockElevenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockElevenRegular: React.FC<LanClockElevenRegularProps>;
export default LanClockElevenRegular;
