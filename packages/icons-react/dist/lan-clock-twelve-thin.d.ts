import React from 'react';

export interface LanClockTwelveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTwelveThin: React.FC<LanClockTwelveThinProps>;
export default LanClockTwelveThin;
