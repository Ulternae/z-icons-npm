import React from 'react';

export interface LanClockElevenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockEleven: React.FC<LanClockElevenProps>;
export default LanClockEleven;
