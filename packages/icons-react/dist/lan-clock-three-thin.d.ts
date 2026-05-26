import React from 'react';

export interface LanClockThreeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockThreeThin: React.FC<LanClockThreeThinProps>;
export default LanClockThreeThin;
