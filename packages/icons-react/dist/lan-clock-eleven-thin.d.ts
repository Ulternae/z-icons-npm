import React from 'react';

export interface LanClockElevenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockElevenThin: React.FC<LanClockElevenThinProps>;
export default LanClockElevenThin;
